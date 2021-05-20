import React, {useEffect, useState} from "react";
import {createWidget} from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'
import Amplify, {API, Auth} from "aws-amplify";
import TableDropdown from "../../components/Dropdowns/TableDropdown";

const getUserId = async () => {
    var userInfo = await Amplify.Auth.currentUserInfo()
    console.log(userInfo.attributes.sub);
    return userInfo.attributes.sub;
};

const color = 'light'

function portfolioRows(portfolios){
    var rows = [];
    if(portfolios.length !== 0)
    for(const i in portfolios){
        rows.push(<tr key={portfolios[i].Item.volatility}>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <span
                    className={
                        "ml-3 font-bold " +
                        +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                >
                    Portfolio {Number(i) + 1}
                  </span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {new Date(portfolios[i].Item.date * 1000).toLocaleDateString()}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {portfolios[i].Item.annual_return.toFixed(4)}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {portfolios[i].Item.sharpe_ratio.toFixed(4)}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {portfolios[i].Item.volatility.toFixed(4)}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <TableDropdown/>
            </td>
        </tr>);
    }
    else return <span>No portfolio found!</span>
    return rows;
}

async function getUsersPortfolios() {
    const result = await API
        .get('FundService', '/portfolios', {
            headers: {
                Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
            },
            response: true,
        });
    console.log(result.data);
    return result.data;
}

export default function MyPortfolios() {

    const [portfolios, setPortfolios] = useState(null);

    useEffect(() => {
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        getUserId().then(value => {
            createWidget('uI8InzYn', {
                container: document.querySelector('#form'),
                hidden: {userid: value},
                onSubmit: (payload) => {
                    setTimeout()
                    getUsersPortfolios().then(value => {
                        setPortfolios(value)
                    })
                }
            })
        });
        getUsersPortfolios().then(value => {
            setPortfolios(value)
        });
    }, []);

    return <>
        <div className="w-full mb-12 px-4">
            <>
                <div
                    className={
                        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                        (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
                    }
                >
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3
                                    className={
                                        "font-semibold text-lg " +
                                        (color === "light" ? "text-blueGray-700" : "text-white")
                                    }
                                >
                                    Portfolios
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                        {/* Projects table */}
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                            <tr>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                    }
                                >
                                    Portfolio
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                    }
                                >
                                    Date
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                    }
                                >
                                    Annual Return %
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                    }
                                >
                                    Sharpe Ratio
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                    }
                                >
                                    Volatility
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                    }
                                ></th>
                            </tr>
                            </thead>
                            <tbody>
                            {portfolios ? portfolioRows(portfolios): ''}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        </div>
        <div style={{height: 500 + 'px'}} data-tf-opacity="0" id="form"/>
    </>

}




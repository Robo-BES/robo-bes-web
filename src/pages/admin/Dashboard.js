import React, {useState} from "react";

import { DataStore } from '@aws-amplify/datastore';
import {FundMetrics, Portfolio} from '../../models';


// components

import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardBarChart from "../../components/Cards/CardBarChart.js";
import CardPageVisits from "../../components/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";


var request = require("request");

var options = { method: 'GET',
    url: 'https://model-predictions.s3.eu-central-1.amazonaws.com/Markowitz_Allianz_MaxSharpe.txt',
    headers:
        { 'postman-token': 'a9420271-a201-0c7b-3cce-6630d65d0663',
            'cache-control': 'no-cache' } }

function getPortfolios(){

}

export default function Dashboard() {
    const [data, setData] = useState("Loading...");
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        setData(body)
    });
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardLineChart />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <CardBarChart />
                </div>
            </div>
            <ul>
                {data}
            </ul>
            <button onClick={() => getPortfolios()}>Test</button>
            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardPageVisits />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <CardSocialTraffic />
                </div>
            </div>
        </>
    );
    const { error, isLoaded, items } = this.state;
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

    }
}

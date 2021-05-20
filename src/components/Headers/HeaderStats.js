import React, {useEffect, useState} from "react";
import allianzLogo from '../../assets/img/img.png'

// components

import CardStats from "../Cards/CardStats.js";
import {API, Auth} from "aws-amplify";

async function getMetrics(fundName){

  function oneWeekBefore() {
    var today = new Date();
    var oneWeekBefore = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return oneWeekBefore.getTime() / 1000;
  }

  const orderData = await API
      .get('FundService', '/metrics', {
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        },
        response: true,
        queryStringParameters: {
          code: fundName,
          date: oneWeekBefore()
        },
      });
  console.log(orderData.data.Items);
  try {
    var first = orderData.data.Items[0];
    var last = orderData.data.Items[orderData.data.Items.length - 1];
  }catch (e) {
    console.log(e);
  }

  if(first && last){
    console.log(first);
    console.log(last);
    var firstPrice = Number(first.price.replace(',', '.'));
    var lastPrice = Number(last.price.replace(',', '.'));

    var change = ((lastPrice - firstPrice) / firstPrice) * 100;
    console.log(change);
    return { 'price': last.price, 'change': change.toFixed(2) };
  }else{
    return { 'price': 'Data not found', 'change': '0' };
  }

}

export default function HeaderStats() {

  const [AENdata, setAENData] = useState({'price': "Loading...", 'change': 0});
  const [AMPdata, setAMPData] = useState({'price': "Loading...", 'change': 0});
  const [AZLdata, setAZLData] = useState({'price': "Loading...", 'change': 0});
  const [KOEdata, setKOEData] = useState({'price': "Loading...", 'change': 0});

  useEffect(() => {
    getMetrics('AEN').then(value => {setAENData(value)});
    getMetrics('AMP').then(value => {setAMPData(value)});
    getMetrics('AZL').then(value => {setAZLData(value)});
    getMetrics('KOE').then(value => {setKOEData(value)});
  }, []);

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="AEN"
                  statTitle={AENdata.price}
                  statArrow="up"
                  statPercent={AENdata.change}
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last week"
                  statIcon={allianzLogo}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="AMP"
                  statTitle={AMPdata.price}
                  statArrow="down"
                  statPercent={AMPdata.change}
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIcon={allianzLogo}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="AZL"
                  statTitle={AZLdata.price}
                  statArrow="down"
                  statPercent={AZLdata.change}
                  statPercentColor="text-orange-500"
                  statDescripiron="Since last week"
                  statIcon={allianzLogo}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="KOE"
                  statTitle={KOEdata.price}
                  statArrow="up"
                  statPercent={KOEdata.change}
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last week"
                  statIcon={allianzLogo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

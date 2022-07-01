import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Coin from "../MockData/coins";
import AdvanceTypography from "../Components/AdvanceTypography";
import styles from './Details.module.css'
import millify from "millify";
import HTMLReactParser from 'html-react-parser';



function filterCoinData(coinId) {
  let filterCoin = Coin.coins.filter((coin) => {
    return coin.uuid === coinId;
  });
  return filterCoin[0];
}
export default function Detail(props) {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  // Only Use when loading data
  const [isLoading, setIsLoading] = useState(false);
  const {name, symbol, description, links}= coinData;
  console.log("***** Description is ", description)
  const stats = [
    { title: 'Price to USD', value: `$ ${coinData?.price && millify(coinData?.price)}` },
    { title: 'Rank', value: coinData?.rank },
    { title: '24h Volume', value: `$ ${coinData?.volume && millify(coinData?.volume)}` },
    { title: 'Market Cap', value: `$ ${coinData?.marketCap && millify(coinData?.marketCap)}` },
    { title: 'All-time-high(daily avg.)', value: `$ ${coinData?.allTimeHigh?.price && millify(coinData?.allTimeHigh?.price)}` },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: coinData?.numberOfMarkets},
    { title: 'Number Of Exchanges', value: coinData?.numberOfExchanges },
    { title: 'Aprroved Supply', value: coinData?.supply?.confirmed ? "Yes" : "No" },
    { title: 'Total Supply', value: `$ ${coinData?.supply?.total && millify(coinData?.supply?.total)}` },
    { title: 'Circulating Supply', value: `$ ${coinData?.supply?.circulating && millify(coinData?.supply?.circulating)}` },
  ];

  useEffect(() => {
    // Case Using Mock Data
    const coinData = filterCoinData(id);
    setCoinData(coinData);
    // Case Using API Call to fetch
    async function fetchData() {
      setIsLoading(true);
      const apiResponse = await fetch(
        "https://coinranking1.p.rapidapi.com/coin/" + id,
        {
          headers: {
            "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
          }
        }
      );
      if (apiResponse.ok) {
        const jsonResponse = await apiResponse.json();
        const coinData = jsonResponse?.data?.coin;
        if (coinData) {
          setIsLoading(false);
          setCoinData(coinData);
        }
      } else {
      }
    }

    fetchData();

    console.log(coinData);
  }, []);

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <div className={styles.header}>
           {`${name} (${symbol})`}
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              {
                stats.map(({title, value})=>{
                  return <AdvanceTypography name={title} value={value}/>
                })
              }
            </div>
            <div className={styles.gridItem}>
            {
                genericStats.map(({title, value})=>{
                  return <AdvanceTypography name={title} value={value}/>
                })
              }
            </div>
            <div className={styles.gridItem}>
              <h3> `What is ${name} ?`</h3>
              { description && HTMLReactParser(description)}
              </div>  
            <div className={styles.gridItem}>{
               links && links.map(({type, url, name})=>{
                return <AdvanceTypography name={type} value={url} asLink={true} linkName={name}/>
              })
            }</div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import Coins from "../MockData/coins.json";
import styles from "./Home.module.css"
import News from "../MockData/TopNews.json";
import NewsCard from "../Components/NewsCard";

import Exchanges from '../MockData/exchanges.json';
import ExchangeCard from "../Components/Exchanges";
// Service import
import { fetchCoins } from "../Services/fetchCoins";
import { fetchNews } from "../Services/fetchNews";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [cardsLoading, setCardsLoading] = useState(false);

  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);
  const [exchanges, setExchanges] = useState(Exchanges.exchanges);

  useEffect(() => {
    getCoinsData();
    getNewsData();
  }, []);

  const getCoinsData = async () => {
    try{
      setCardsLoading(true);
      let coinsData = await fetchCoins();
      setCards(coinsData.data.coins)
      setCardsLoading(false);
    } catch(err) {
      setCardsLoading(false);
    }
    
  }
  const getNewsData = async()=>{
    //Write your logic here
    try {
      setNewsLoading(true)
      let newsData = await fetchNews();
      setNews(newsData.value)
      setNewsLoading(false)
    }catch(err) {
      setNewsLoading(false)
    }
  }

  return (
    
    <div className={styles.container} >
      <div style={{ padding: "8px 16px", width:"100%" }}>
        <h2>Coins </h2>
      </div>
      {
        cardsLoading ? <p className={styles.p} >Loading Cards...</p> : 
        <div className={styles.container}>
          {cards.map((coin) => {
            return (
              <Card
                name={coin.name}
                iconUrl={coin.iconUrl}
                price={coin.price}
                marketCap={coin.marketCap}
                change={coin.change}
                key={coin.uuid}
                id={coin.uuid}
                number={coin.rank}
              />
            );
          })}{" "}
        </div>
      }
      <div style={{ padding: "8px 16px", width:"100%" }}>
        <h2>Top News </h2>
      </div>

      {
        newsLoading ? <p className={styles.p}>Loading News...</p> :       
        <div className={styles.container}>
          {
            news.map((oneNews) => {
              const { name, description, datePublished } = oneNews;
              const imageUrl = oneNews?.image?.thumbnail?.contentUrl;
              const thumbNailURL = oneNews?.provider[0]?.image?.thumbnail?.contentUrl;
              const providerName = oneNews?.provider[0]?.name;
              return <NewsCard heading={name}
                imageUrl={imageUrl}
                description={description}
                thumbNailURL={thumbNailURL}
                providerName={providerName}
                datePublished={datePublished}
              />
            })
          }
      </div>
      }


      <div style={{ padding: "8px 16px",  width:"100%"  }}>
        <h2>Exchanges </h2>
      </div>

      <div className={styles.container}>
        {exchanges.map((exchange) => {
          return (
            <ExchangeCard
              name={exchange.name}
              iconUrl={exchange.iconUrl}
              price={exchange.price}
              numberOfMarkets={exchange.numberOfMarkets}
              change={exchange.change}
              key={exchange.uuid}
              id={exchange.uuid}
              number={exchange.rank}
            />
          );
        })}
      </div>
    </div>
  );
}

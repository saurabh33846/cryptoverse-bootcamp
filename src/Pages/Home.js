import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import Coins from "../MockData/coins.json";
import styles from "./Home.module.css"
import News from "../MockData/TopNews.json";
import NewsCard from "../Components/NewsCard";

export default function Home() {
  const [cards, setCards] = useState(Coins.coins);
  const [news, setNews ] = useState(News.value);
  console.log("News is ****",news)
  console.log(Coins);
  useEffect(() => {
        // fetch("https://coinranking1.p.rapidapi.com/coins?limit=10", {
    //   headers: {
    //     "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
    //     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
    //   }
    // })
    //   .then((resp) => {
    //     return resp.json();
    //   })
    //   .then((jsonResp) => {
    //     console.log(jsonResp);
    //   });
  }, []);
  
  return (
    <div className={styles.container} >
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

      <div style={{padding:"8px 16px"}}>
        <h2>Top News </h2>
      </div>

      <div className={styles.container}>       
        {
          news.map((oneNews)=>{
            const {name,description, datePublished} = oneNews;
            const imageUrl = oneNews?.image?.thumbnail?.contentUrl;
            const thumbNailURL = oneNews?.provider[0]?.image?.thumbnail?.contentUrl;
            const providerName = oneNews?.provider[0]?.name;
            return <NewsCard heading={name} 
            imageUrl={imageUrl} 
            description={description} 
            thumbNailURL= {thumbNailURL} 
            providerName={providerName}
            datePublished = {datePublished}
            />
          })
        }
      </div>
    </div>
  );
}

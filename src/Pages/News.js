import React, { useState, useEffect } from "react";
import styles from "./Home.module.css"
import News from "../MockData/News.json";
import NewsCard from "../Components/NewsCard";

export default function Home() {
  const [news, setNews ] = useState(News.value);
  const [isLoading, setIsLoading] = useState(false);
  console.log("News is ****",news)
  useEffect(() => {
    async function fetchData(){
        setIsLoading(true);
        const response = await fetch("https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=12", {
          headers: {
            "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
            "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com"
          }
        })
        if(response.ok) {
          const jsonResp = await response.json()
          console.log("@@@@@@ Json Response api", jsonResp);
          setIsLoading(false)
          setNews(jsonResp.value)
        }
      }
      fetchData();
  }, []);
  return (
      <div>
          {
              isLoading ? <p> Loading... </p> : 
              <div className={styles.container} >
              <div> <h2 style={{padding:"16px"}}>News </h2></div>
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
          }
              
      </div>

  );
}

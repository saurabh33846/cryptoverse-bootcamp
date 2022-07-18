import React, { useState, useEffect } from "react";
import styles from "./Home.module.css"
import News from "../MockData/News.json";
import NewsCard from "../Components/NewsCard";
import { fetchNews } from "../Services/fetchNews";

export default function Home() {
  const [news, setNews ] = useState(News.value);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNewsData()
  }, []);

  const getNewsData = async () => {
    let newsData = await fetchNews();
    // setNews(newsData)
  }
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

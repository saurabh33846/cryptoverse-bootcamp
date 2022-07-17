import React, {useState, useEffect} from "react";
import mockCoins from '../MockData/coins.json';
import Card from './Card';
import styles from './container.module.css'

/**
 * Uncomment below lines to import news and newscard component.
 */

import NewsCard from "./NewsCard";
import news from "../MockData/News.json";


function Container() {
    const [coins, setCoins] = useState([]);
    /** Initialise your news State here */
    const [newsList, setNewsList] = useState([]);
    return (
        <div style={{"marginLeft":"60px"}} >
            <button className={styles.button} onClick={()=>{
            }}>Show Card</button>
            <div className={styles.container}>
                {
                    coins.map((coinData)=>{
                    return  <Card
                        name={coinData.name}
                        iconUrl={coinData.iconUrl}
                        price={coinData.price}
                        marketCap={coinData.marketCap}
                        change={coinData.change}
                        key={coinData.uuid}
                        id={coinData.uuid}
                        number={coinData.rank}
                    />
                    })
                }
            </div>
            
            <h2 style={{"padding":"0 16px"}}>Top News </h2>

            <button className={styles.button} onClick={()=>{
                // Set your News List State here.

            }}>Show News
            </button>
            <div className={styles.container}>
                {
                    // Uncomment this line to render List of  newsCard component
                    
                    /**
                      newsList.map((newsData)=>{
                         return <NewsCard />
                    })
                     */

                    // Paas the following props to newsCard component to complete this exercise.

                    /**
                     *  imageUrl ={newsData.imageUrl}
                        description = {newsData.description}
                        thumbnailURL = {newsData.thumbnailURL}
                        heading={newsData.name} 
                        providerName = {newsData.providerName}
                        datePublished={newsData.datePublished} 
                     */
                    
                 }
            </div>
        </div>
    )
}

export default Container;
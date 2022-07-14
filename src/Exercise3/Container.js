import React, {useState, useEffect} from "react";
import mockCoins from '../MockData/coins.json';
import Card from './Card';
import styles from './container.module.css'

/**
 * Uncomment below lines to import news and newscard component.
 */

// import NewsCard from "./NewsCard";
// import news from "../MockData/News.json";


function Container() {
    const [coins, setCoins] = useState([]);
    const [newsList, setNewsList] = useState([]);

    /** Initialise your news State here */
    useEffect(()=>{
        setCoins(mockCoins.coins);
       /** Set your news state here */
       setNewsList(news)
    }, [])

    return (
        <div style={{"marginLeft":"60px"}} >
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
            <div className={styles.container}>
                {
                    // Uncomment this line to render newsCard component
                    
                    /**
                      newsList.map((newsData)=>{
                         return <NewsCard heading={newsData.name} 
                                providerName = {newsData.providerName}
                                datePublished={newsData.datePublished} 
                            />
                    })
                     */

                    // Paas the following props to newsCard component to complete this exercise.

                    /**
                     *  imageUrl ={newsData.imageUrl}
                         description = {newsData.description}
                         thumbnailURL = {newsData.thumbnailURL}
                     */
                    
                 }
            </div>
        </div>
    )
}

export default Container;
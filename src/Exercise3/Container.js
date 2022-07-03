import React, {useState, useEffect} from "react";
import mockCoins from '../MockData/coins.json';
import Card from './Card';
import styles from './container.module.css'

/**
 * News Component and data are already imported.
 */

import NewsCard from "./NewsCard";
import newsData from "../MockData/News.json";


function Container() {
    const [coins, setCoins] = useState([]);

    /** Initialise your news State here */
    useEffect(()=>{
        setCoins(mockCoins.coins);
       /** Set your news state here */
    }, [])

    return (
        <div >
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
            
            <h2>Top News </h2>
            <div className={styles.container}>
                {
                    /** 
                     * Write your solution here
                     * 
                     */
                 }
            </div>
        </div>
    )
}

export default Container;
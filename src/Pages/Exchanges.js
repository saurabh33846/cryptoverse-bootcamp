import React, { useState, useEffect } from "react";
import styles from "./Home.module.css"
import Exchanges from "../MockData/exchanges.json";
import ExchangeCard from "../Components/Exchanges";

export default function Exchange() {
  const [exchanges, setExchanges ] = useState(Exchanges.exchanges);
  const [isLoading, setIsLoading] = useState(false);


  return (
      <div>
          {
              isLoading ? <p> Loading... </p> : 
              <div className={styles.container} >
              <div> <h2 style={{padding:"16px"}}>Exchanges </h2></div>
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
          }
              
      </div>

  );
}

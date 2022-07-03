import React from "react";
import styles from './Card.module.css'
import { useNavigate } from "react-router-dom";
import Typography from "./Typography";
import millify from "millify";



function CoinCard(props) {
  const { name, iconUrl, price, marketCap, change, id, number } = props;
    let navigate = useNavigate();
  return (
    <div className={styles.container} role="button" onClick={()=>{
      navigate("coin/"+id );
    }}>
      <div className={styles.cardHeader}>
        <div>
          <span>{number + ". "}</span>
          <span>{name}</span>
        </div>
        <div>
          <img width="40px" src={iconUrl} alt="Icon" />
        </div>
      </div>
      <div className={styles.cardContent}>
        <Typography name="Price" value={millify(price || 2) + " $"} />
        <Typography name="MarketCap" value={millify(marketCap || 1)} />
        <Typography name="DailyChanges" value={`${change}%`} />
      </div>
    </div>
  );
}
export default CoinCard;

import React from "react";
import styles from './Card.module.css'
import { useNavigate } from "react-router-dom";
import Typography from "./Typography";
import millify from "millify";



function ExchangeCard(props) {
  const { name, iconUrl, price, numberOfMarkets, id, number } = props;
    let navigate = useNavigate();
  return (
    <div className={styles.container} role="button" >
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
        <Typography name="Number of Market" value={millify(numberOfMarkets || 1)} />
      </div>
    </div>
  );
}
export default ExchangeCard;

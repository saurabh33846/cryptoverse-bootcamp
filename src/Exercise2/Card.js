import React from "react";
import styles from './Card.module.css';

function CoinCard(props) {
  const { name, price} = props;
  return (
    <div className={styles.container} role="button">
      <div className={styles.cardHeader}>
          {name}
      </div>
      <div className={styles.cardContent}>
          <span>price :</span>
          <span> {price}</span>
      </div>
    </div>
  );
}
export default CoinCard;

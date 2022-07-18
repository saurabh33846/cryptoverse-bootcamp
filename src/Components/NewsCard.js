import React from "react";
import styles from "./NewsCard.module.css";
import moment from "moment";

function NewsCard(props) {
    const { heading, imageUrl, price, marketCap, change, id, description, thumbNailURL,providerName, datePublished} = props;
    console.log("&&&&& URL Is ", imageUrl)
  return (
    <div className={styles.container} role="button" onClick={()=>{
    }}>
      <div className={styles.cardHeader}>
        <div>
          <h3>{heading}</h3>
        </div>
        <div>
          <img className={styles.image} width="100px" src={imageUrl} alt="Icon" />
        </div>
      </div>
      <div className={styles.cardContent}>
        <p>{description && description.length > 100 ? `${description.substring(0, 100)}...` : description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardFooter}>
            <img className={styles.image} width="30px" src={thumbNailURL} alt="Icon" />
            {providerName}
        </div>
        <div>{moment(datePublished).startOf('ss').fromNow()}</div>
      </div>
    </div>
  )
}
export default NewsCard;
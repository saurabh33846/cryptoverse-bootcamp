import React from "react";
import styles from "./NewsCard.module.css";

function NewsCard(props) {
    const { heading,providerName,description} = props;
  return (
    <div role="button"> 
      <div className={styles.cardHeader}>
          <h3>{heading}</h3>
      </div>
      <div className={styles.cardContent}> 
        <p>
            {
                /** Write description here */
                description
            }
        </p>
      </div>
      <div className={styles.cardFooter}>
            {
                providerName
            }
      </div>
    </div>
  )
}
export default NewsCard;
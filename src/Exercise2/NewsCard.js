import React from "react";
import styles from "./NewsCard.module.css";

function NewsCard(props) {
    const { heading,provider,description} = props;
  return (
    <div role="button"> 
      <div className={styles.cardHeader}>
          <h3>{heading}</h3>
      </div>
      <div className={styles.cardContent}> 
        <p>
            {
                /***
                 * Write Description prop here
                 */
            }
        </p>
      </div>
      <div className={styles.cardFooter}>
            {
                provider
            }
      </div>
    </div>
  )
}
export default NewsCard;
import React from "react";
import styles from "./NewsCard.module.css";

function NewsCard(props) {
    const { heading,provider,description} = props;
  return (
    <div className={styles.container} role="button"> 
      <div className={styles.cardHeader}>
          <h3>{heading}</h3>
      </div>
      <div className={styles.cardContent}> 
        <p>
            {
                description
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
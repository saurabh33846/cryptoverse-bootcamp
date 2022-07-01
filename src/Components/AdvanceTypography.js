import React from "react";
import styles from './AdvanceTypography.module.css';
function AdvanceTypography({ name, value, asLink, linkName }) {
  console.log("Key", name);
  return (
    <p className={styles.typoContainer}>
      <span>{name}</span>
      {
          asLink ? <a className={styles.link} href={value}> {linkName}</a>: 
          <span className={styles.value}>{value}</span>
        }
    </p>
  );
}

export default AdvanceTypography;

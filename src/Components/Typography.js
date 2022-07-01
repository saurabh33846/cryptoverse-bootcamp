import React from "react";
import styles from './Typography.module.css';
function Typography({ name, value }) {
  console.log("Key", name);
  return (
    <p className={styles.typoContainer}>
      <span>{name}</span>
      <span> : </span>
      <span>{value}</span>
    </p>
  );
}

export default Typography;

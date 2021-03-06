import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'
import {ReactComponent as Home} from '../assets/Home.svg'
import {ReactComponent as Currency} from '../assets/Currency.svg';
import {ReactComponent as Exchanges} from '../assets/Exchanges.svg';
import {ReactComponent as News} from '../assets/News.svg';


export default function NavBar() {
  const changeActive = ()=>{

  }
  return (
    <div className={styles.navBar}>
      <div className={styles.navContainer}>
      <h2 className={styles.header}><i>CryptoBase</i></h2>
        <NavLink className={styles.navLink} activeClassName={styles.active} to="/">
            <Home className={styles.icon}/>
              Home
          </NavLink>
        <NavLink className={styles.navLink} activeClassName={styles.active} to="/news">
          <News className={styles.icon}/>
           News
        </NavLink>
        <NavLink className={styles.navLink}  activeClassName={styles.active} to="/exchanges">
          <Exchanges className={styles.icon}/>
          Exchanges
        </NavLink>
        <NavLink className={styles.navLink}  activeClassName={styles.active} to="/currencies">
          <Currency className={styles.icon} />Currencies
        </NavLink>
    </div>
    </div>
    
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'
import {ReactComponent as Home} from '../assets/Home.svg'
import {ReactComponent as Currency} from '../assets/Currency.svg';
import {ReactComponent as Exchanges} from '../assets/Exchanges.svg';
import {ReactComponent as News} from '../assets/News.svg';
import { BrowserRouter } from "react-router-dom";



export default function NavBar() {
  const changeActive = ()=>{

  }
  return (
    <BrowserRouter>
      <div className={styles.navBar}>
        <div className={styles.navContainer}>
          <h2 className={styles.appHeader}>Cryptobase</h2>
          <NavLink className={styles.navLink} to="/">
              <Home className={styles.icon}/>
                Home
            </NavLink>
          <NavLink className={styles.navLink} to="/news">
            <News className={styles.icon}/>
            News
          </NavLink>
          <NavLink className={styles.navLink}  to="/exchanges">
            <Exchanges className={styles.icon}/>
            Exchanges
          </NavLink>
          <NavLink className={styles.navLink}  to="/currencies">
            <Currency className={styles.icon} />Currencies
          </NavLink>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

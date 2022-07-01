import React from "react";
import { Switch, Routes, Route, Link } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "../Pages/Home";
import News from "../Pages/News";
import Details from "../Pages/Details";
import styles from './SideNav.module.css'
export default function SideNav() {
  return (
    <div className={styles.container} >
      <NavBar />
      <div className={styles.routes}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Home />{" "}
              </div>
            }
          ></Route>
          <Route
            exact
            path="/exchanges"
            element={<div>Exchanges </div>}
          ></Route>
          <Route
            exact
            path="/currencies"
            element={<div>Currencies </div>}
          ></Route>
          <Route
            exact
            path="/coin/:id"
            element={
              <div>
                <Details />{" "}
              </div>
            }
          ></Route>
          <Route exact path="/news" element={<News/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

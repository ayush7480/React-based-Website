import React, { Component } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Facts from "./Facts";
import About from "./About";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/facts">Facts</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/facts" element={<Facts />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;

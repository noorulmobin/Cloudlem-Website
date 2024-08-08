import React from "react";
import Logo from "../src/assets/logo.png";
import icon1 from "../src/assets/headerimage.png";
import "./App.css";

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={Logo}></img>
      </div>
      <div className="header">
        <img src={icon1} alt="headerimage " id="headerimage"></img>
        <p>
          Cloudlem is a reliable and trusted DevOps <br />
          consulting company that helps clients
          <br />
          succeed in the ever-changing world of <br />
          technology.
        </p>
      </div>
    </div>
  );
};

export default Header;

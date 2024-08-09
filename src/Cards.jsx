import React from "react";
import "./App.css";
import icon2 from "../src/assets/devops1.png";
import icon3 from "../src/assets/multi.png";
import icon4 from "../src/assets/product.png";
import icon5 from "../src/assets/database.png";
import icon6 from "../src/assets/db admin.png";
import icon7 from "../src/assets/cloudstorage.png";

const Cards = () => {
  return (
    <div className="cards">
      <div id="cards1">
        <div id="card">
          <img src={icon2} alt="DevOps" width="81px" />
          <h2>DevOps Services</h2>
          <p>
            DevOps is a set of practices tools <br />
            and a cultural philosophy that <br />
            automates and integrates the <br />
            processes between software <br />
            development and IT teams.
          </p>
        </div>

        <div id="card">
          <img src={icon3} alt="DevOps" width="81px"/>
          <h2>Multi Cloud Services</h2>
          <p>
            Multi-cloud services enable <br />
            businesses to leverage multiple <br />
            cloud providers for enhanced <br />
            reliability, performance, and cost <br />
            efficiency.
          </p>
        </div>
        <div id="card">
          <img src={icon4} alt="DevOps" width="81px"/>
          <h2>Product Design & Development</h2>
          <p>
            Product design and development <br />
            involve creating and refining <br />
            products through innovative <br />
            design
          </p>
        </div>
      </div>
      <div id="cards2">
        <div id="card">
          <img src={icon5} width="95px" />
          <h2>Server Managment</h2>
          <p>
            DevOps is a set of practices tools <br />
            and a cultural philosophy that <br />
            automates and integrates the <br />
            processes between software <br />
            development and IT teams.
          </p>
        </div>

        <div id="card">
          <img src={icon6} width="81px"/>
          <h2>Data Base Administration</h2>
          <p>
            Multi-cloud services enable <br />
            businesses to leverage multiple <br />
            cloud providers for enhanced <br />
            reliability, performance, and cost <br />
            efficiency.
          </p>
        </div>
        <div id="card">
          <img src={icon7} width="81px" />
          <h2>Cloud Managed Services</h2>
          <p>
            Product design and development <br />
            involve creating and refining <br />
            products through innovative <br />
            design
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;

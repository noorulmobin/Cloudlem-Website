import React from "react";
import icon11 from "../src/assets/devops.png";
import icon12 from "../src/assets/product.png";
import icon13 from "../src/assets/multi.png";
import icon14 from "../src/assets/database.png";
import icon15 from "../src/assets/db admin.png";
import icon16 from "../src/assets/cloudstorage.png";
import icon17 from "../src/assets/tick.jpg";

const Pricecards = () => {
  return (
    <div>
      <div id="main-container">
        <div class="container">
          <div class="card">
            <img src={icon11} alt="DevOps Support" />
            <h2>DevOps Support</h2>
            <p class="price">$20 to $40</p>
            <p class="support">
              <img src={icon17} alt="Check" /> 24/7 Support
            </p>
            <p class="involve">
              <img src={icon17} alt="Check" /> Get Involve today
            </p>
          </div>

          <div class="card">
            <img src={icon12} alt="Development" />
            <h2>Development</h2>
            <p class="price">$15 to $25</p>
            <p class="support">
              <img src={icon17} alt="Check" /> 24/7 Support
            </p>
            <p class="involve">
              <img src={icon17} alt="Check" /> Get Involve today
            </p>
          </div>

          <div class="card">
            <img src={icon13} alt="Multi cloud Services" />
            <h2>Multi cloud Services</h2>
            <p class="price">$20 to $40</p>
            <p class="support">
              <img src={icon17} alt="Check" />
              24/7 Support
            </p>
            <p class="involve">
              <img src={icon17} alt="Check" /> Get Involve today
            </p>
          </div>

          <div class="card">
            <img src={icon14} alt="Server Management" />
            <h2>Server Management</h2>
            <p class="price">$20 to $40</p>
            <p class="support">
              <img src={icon17} alt="Check" />
              24/7 Support
            </p>
            <p class="involve">
              <img src={icon17} alt="Check" />
              Get Involve today
            </p>
          </div>

          <div class="card">
            <img src={icon15} alt="Database Administration" />
            <h2>Database Administration</h2>
            <p class="price">$20 to $40</p>
            <p class="support">
              <img src={icon17} alt="Check" />
              24/7 Support
            </p>
            <p class="involve">
              <img src={icon17} alt="Check" /> Get Involve today
            </p>
          </div>

          <div class="card">
            <img src={icon16} alt="Cloud Managed" />
            <h2>Cloud Managed</h2>
            <p class="price">$20 to $40</p>
            <p class="support">
              <img src={icon17} alt="Check" />
              24/7 Support
            </p>
            <p class="involve">
              <img src={icon17} alt="Check" /> Get Involve today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricecards;

import React from "react";
import icon8 from "../src/assets/image.png";
import icon9 from "../src/assets/image1.png";
import icon10 from "../src/assets/image3.png";
import "./App.css";

const Details = () => {
  return (
    <div>
      <div id="cost">
        <ul>
          <li>
            Cloudlem is an emerging DevOps consulting company with a <br />
            wealth of experience in supporting customers globally to <br />
            implement DevOps practices.{" "}
          </li>
          <li>
            Cloudlem's expertise includes cloud migration, maintenance, and
            <br />
            supporting customers in building scalable and highly available
            <br />
            architecture on well-known cloud service providers such as AWS,{" "}
            <br />
            Azure, GCP, and more
          </li>
        </ul>
        <div id="cost-para">
          <img src={icon8} width="81px" alt="Reduce operational costs" />
          <p>
            Reduce operational <br />
            costs
          </p>
        </div>
      </div>

      <div id="customer">
        <div id="customer-para">
          <img src={icon9} alt="Provide an awesome customer experience" width="91px" />
          <p>
            Provide an awesome <br />
            customer experience
          </p>
        </div>
        <p>
          Cloudlem's expertise includes cloud migration, maintenance, and <br />
          supporting customers in building scalable and highly available <br />
          architecture on well-known cloud service providers such as AWS, <br />
          Azure, GCP, and more
        </p>
      </div>

      <div id="scalibility">
        <p>
          Cloudlem offers 24/7 managed services with a 10-minute SLA, <br />
          providing customers with timely and efficient support.
        </p>
        <div id="scalibility-para">
          <img src={icon10} alt="Scalability and 24x7 availability"  width="81px"/>
          <p>
            Scalability and 24x7 <br />
            availability
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;

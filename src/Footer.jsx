import React from "react";
import icon18 from "../src/assets/icon6.png";
import icon19 from "../src/assets/icon7.png";
import icon20 from "../src/assets/icon8.png";

const Footer = () => {
  
  return (
    <div className="footer">
      <p>If you prefer not to receive emails like this, you may unsubscribe</p>
      <p>&copy; 2019 ServerSharing. All rights reserved.</p>
      <div className="social-icons">
        <img src={icon18} alt="Facebook" />
        <img src={icon19} alt="Instagram" />
        <img
          src={icon20}
          alt="LinkedIn"
          
        />
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import icon18 from "../src/assets/icon6.png";
import icon19 from "../src/assets/icon7.png";
import icon20 from "../src/assets/icon8.png";

const Footer = () => {
  const handleClick1 = () => {
    console.log("Icon clicked");
    window.open("https://www.facebook.com/Cloudlem", "_blank");
  };
  const handleClick2 = () => {
    console.log("Icon clicked");
    window.open("https://www.instagram.com/cloudlemoffical/", "_blank");
  };
  const handleClick3 = () => {
    console.log("Icon clicked");
    window.open(
      "https://www.linkedin.com/company/cloudlem?originalSubdomain=pk",
      "_blank"
    );
  };

  return (
    <div className="footer">
      <p>If you prefer not to receive emails like this, you may unsubscribe</p>
      <p>&copy; 2019 ServerSharing. All rights reserved.</p>
      <div className="social-icons">
        <img src={icon18} alt="Facebook" onClick={handleClick1} />
        <img src={icon19} alt="Instagram" onClick={handleClick2} />
        <img src={icon20} alt="LinkedIn" onClick={handleClick3} />
      </div>
    </div>
  );
};

export default Footer;

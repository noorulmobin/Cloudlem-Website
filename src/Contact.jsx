import React from "react";

const Contact = () => {
  const handleClick = () => {
    window.open(
      "https://www.linkedin.com/company/cloudlem?originalSubdomain=pk",
      "_blank"
    );
  };
  return (
    <div id="btn">
      <button onClick={handleClick}>contact us</button>
    </div>
  );
  s;
};

export default Contact;

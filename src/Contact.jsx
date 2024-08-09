import React from "react";

const Contact = () => {
  const handleClick = () => {
    window.open(
      "https://www.https://www.linkedin.com/company/cloudlem/.com",
      "_blank"
    );
  };
  return (
    <div id="btn">
      <button onClick={handleClick}>contact us</button>
    </div>
  );
};

export default Contact;

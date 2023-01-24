import React from "react";
const Company = (props) => {
  const { logo } = props;
  return <img src={logo} alt="Italian Trulli" />;
};

export default Company;

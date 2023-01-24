import React from "react";

const Button = (props) => {
  const { className } = props;
  const { children } = props;
  return <button className={`button ${className}`}>{children}</button>;
};

export default Button;

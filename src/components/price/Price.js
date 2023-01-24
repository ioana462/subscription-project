import React from "react";

const Price = (props) => {
  const { newprice, timeperiod } = props;
  return (
    <div className="price">
      <span>{newprice}</span>
      <span>{timeperiod}</span>
    </div>
  );
};

export default Price;

import React from "react";

const Offer = (props) => {
  const { packagename, details } = props;
  return (
    <div className="offer">
      <span>{packagename}</span>
      <span>{details}</span>
    </div>
  );
};

export default Offer;

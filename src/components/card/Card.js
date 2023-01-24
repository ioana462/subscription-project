import React from "react";
import Button from "../button";
import Company from "../company";
import Offer from "../offer";
import Price from "../price";

const Card = (props) => {
  const { color, packagename, details, newprice, timeperiod, logo } = props;
  return (
    <div className={`card ${color}`}>
      <Company logo={logo} />
      <Offer packagename={packagename} details={details} />
      <Price newprice={newprice} timeperiod={timeperiod} />
      <Button className="button_grey">Add subscription</Button>
    </div>
  );
};

export default Card;

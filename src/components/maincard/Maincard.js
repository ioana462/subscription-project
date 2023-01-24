import Button from "components/button";
import Card from "components/card";
import image1 from "../../img/image1.png";
import image2 from "../../img/image2.png";
import image3 from "../../img/image3.png";
import React from "react";

const Maincard = () => {
  return (
    <div className="home">
      <div className="home_title">
        <span>Get the most out of your mobile with the right subscription</span>
        <span>
          All devices come with free delivery or pickup as standard. See
          information on available shopping options for your location.
        </span>
      </div>
      <div className="home__cards">
        <Card
          color="yellow"
          packagename="Ice Mobile 10GB"
          details="Up to 100Mbit/s"
          newprice="299,00"
          timeperiod="/month"
          logo={image2}
        />
        <Card
          color="pink"
          packagename="Telia Mobil 15GB"
          details="Unlimited calls, SMS and MMS"
          newprice="953,00"
          timeperiod="/month"
          logo={image1}
        />
        <Card
          color="blue"
          packagename="Telenor Next Fast"
          details="Up to 100Mbit/s"
          newprice="1028,00"
          timeperiod="/month"
          logo={image3}
        />
      </div>
      <Button className="button_blue">See all subscriptions</Button>
    </div>
  );
};

export default Maincard;

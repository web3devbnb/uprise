import React from 'react';
import { Link } from "react-router-dom";
import classes from './banner.module.css';

function Banner() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  
  return (
    <div id="Banner">
      <div className="row">
        <div className="col-12 col-lg-8">
          <picture>
            <source media="(max-width:992px)" srcSet="assets/img/banner/bannerImages/UP_Banner_300.png"/>
            <img src="assets/img/banner/bannerImages/UP_Banner_900.png" />
          </picture>    
          <h1>BUY.HOLD.EARN.</h1>
          <p>
            Every Feature and Utility works in your favor
          </p>
          <div className="row">
            <div className="col-6">
              <Link to="/swap" className="button scrollto">
                <p className="center">Buy Now!</p>
              </Link>
            </div>
            <div className="col-6">
              <Link to="/UpRise" className="button scrollto">
                <p className="center">Learn More</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 desktop">
          <div>
            <picture>
              <source media="(max-width:992px)" srcSet="assets/img/banner/bannerImages/moonGirlbig_300.png" />
              <img src="assets/img/banner/bannerImages/moonGirlbig_400.png" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

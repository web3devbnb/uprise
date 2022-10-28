import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font30px = {fontSize: "30px"};
  const widthHalf = {width: "50%"};
  const widthFull = {width: "100%"};
  
  return (
    <section id="Footer">
      <div className="container">
        <div className="row" style={noMargin}>
          <div className="col-6 col-lg-2">
            <Link to="/dashboard" className="button scrollto">Dashboard</Link>
          </div>
          <div className="col-6 col-lg-2">
            <Link to="/roadmap" className="button scrollto">Roadmap</Link>
          </div>

          <div className="col-4 col-lg-2">
            <Link to="/airdrops" className="button scrollto">Airdrops</Link>
          </div>
          <div className="col-4 col-lg-2">
            <Link to="https://t.me/UpriseTG" className="button scrollto">Community</Link>
          </div>
          <div className="col-4 col-lg-2">
            <Link to="/faqs" className="button scrollto">FAQs</Link>
          </div>

          <div className="col-12 col-lg-2 text-center">
            <Link to="/donations" className="button scrollto">Donations</Link>
          </div>
        </div>

        <h3>UpRise</h3>
        <p>Buy, Hold, Earn: World's Best Innovative, Upgradable Token</p>
        <div className="social-links">
          <a href="https://t.me/UpRiseTG" target="_tab" className="telegram"><i className="bi bi-telegram"></i></a>
          <a href="https://twitter.com/UpRiseTW" target="_tab" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/TheUpRise/" target="_tab" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/theUpRise" target="_tab" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://discord.gg/" target="_tab" className="discord"><i className="bx bxl-discord"></i></a>
          <a href="https://www.reddit.com/r/UpRise" target="_tab" className="reddit"><i className="bx bxl-reddit"></i></a>
        </div>
        <div className="copyright">
          <Link to="/donations">Click Here to fund our Project</Link>
        </div>
        <div className="copyright">
          <p>Official email: <strong>UpRise@gmail.com</strong></p>
          <p>secondary email: <strong>UpRise@protonmail.com</strong></p>
        </div>
        <div className="copyright">
          &copy; Copyright <strong><span>UpRise</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by UPRISE
        </div>
        <div id="cvalue"></div>
        <div id="ctime"></div>
        <img src="assets/img/2UPLOGOxmas.png" style={{width:"100%", height: "300px"}} />
      </div>
    </section>
  );
}

export default Footer;

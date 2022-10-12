import React from 'react';

function Team() {
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
    <section id="Team">
      <div className="section-title">
        <h2>Team</h2>
      </div>

      <div className="row">
        <div className="col-12 col-md-3 text-justify content">
          <h3>Ryan</h3>
          <h6>Founder / Lead Dev</h6>
          <p>USA</p>
          <div className="row">
            <div className="col-3 center">
              <a href="https://t.me/Ryan_web3" target="_tab" className="telegram"><i className="bi bi-telegram"></i></a>
            </div>
            <div className="col-3 center">
              <a href="https://github.com/ALLCOINLAB" target="_tab" className="github"><i className="bi bi-github"></i></a>
            </div>
          </div>
          <p>This shy founder is the mastermind developer behind all UpRise's infrastructure. 
            Whatever crazy idea you can think of, LAB will make it happen, like magic.
            It is rumored he doesn't sleep and when he says something "will take long time", he will have it done in 15 minutes.
          </p>
        </div>
        <div className="col-12 col-md-3 text-justify content">
          <h3>Zach</h3>
          <h6>Co-Founder / Lead Operations</h6>
          <p>USA 🇺🇸</p>
          <div className="row">
            <div className="col-3 center">
              <a href="https://t.me/Zach_lead" target="_tab" className="telegram"><i className="bi bi-telegram"></i></a>
            </div>
          </div>
          <p>
            He is the link between all the UpRise's mechanisms.
            He makes sure everything is working smoothly to acheive the team's daily goals and organizes the marketing strategies.
            Don't say something cannot be done because he surely will prove you wrong.
            Legend says he wakes up every morning chanting "To UpRise and Beyond"
          </p>
      </div>
      </div>
    </section>
  );
}

export default Team;

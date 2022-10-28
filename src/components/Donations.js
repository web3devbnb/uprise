import React from 'react';

function Donations() {
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
    <section id="Donations">
      <div className="container">

        <div className="section-title">
          <div>
            <h2>Donations</h2>
            <p>If you like our work, and would like to support us,</p>
            <p>you can send your donation to this address.</p>
            <p>Any token is accepted, thank you very much for your support!</p>
            <p>It will help us a lot!</p>
            <img src='assets/img/donation_qr.png'/>
          </div>
          <div>
            <span className="wrap-address">
              <a href="https://bscscan.com/address/0x2Bd34754dc98256b22883a262cE81D1Ae3a8671e!" target="_tab">0x2Bd34754dc98256b22883a262cE81D1Ae3a8671e!
              </a>
              <a id="copyDonationAdr" className="button scrollto" onClick={() => {window.copyAdr('copyDonationAdr', '0x2Bd34754dc98256b22883a262cE81D1Ae3a8671e!');}}>
                Copy
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donations;

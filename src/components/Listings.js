import React from 'react';

function Listings() {
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
    <section id="Listings">
      <div className="section-title">
        <h2>Listings</h2>
      </div>
      <div className="row">

        <div className="col-6 col-lg-2">
          <a href="https://www.coinbase.com/price/UpRise" target="_tab">
            <img src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" style={widthFull}/>
          </a>
        </div>
        <div className="col-6 col-lg-2">
          <a href="/" target="_tab">
            <img src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=15bcb56" style={widthFull}/>
          </a>
        </div>
        <div className="col-6 col-lg-2">
            <img src="https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png" style={widthFull}/>
        </div>
        <div className="col-6 col-lg-2">
          <a href="https://charts.bogged.finance/Soon" target="_tab">
            <img src="https://global-uploads.webflow.com/60f997cdf2dbe758a7f94a3b/61141e5427c1a057eb719535_Bogged%20Finance%20Logo%20White.svg" style={widthFull}/>
          </a>
          </div>
      </div>
    </section>
  );
}

export default Listings;

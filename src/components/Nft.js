import React from 'react';

export default function Nft() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const imgStyle = {top: "0", left: "0", padding: "0px", height: "auto"};
  const imgStyle2 = {position: "absolute", top: "0", left: "0", height: "100%"};
  const divStyle = {width: "100%", position: "relative"};
  const divStyle2 = {margin: "20px", boxShadow: "0px 0px 10px 1px #a7288a77"};
  const divStyle3 = {margin: "20px", boxShadow: "0px 0px 10px 1px #f9580c77"};
  return (
    <div id="Nft">
      <div id="NFT" className="container aos-init aos-animate" data-aos="fade-up" style={{padding: "0px"}}>
        <div className="section-title">
          <h2>NFT</h2>
        <p style={{fontSize: "40px"}}>Only Available below <span>2M MCAP</span></p>
        </div>
        <div className="wrap-address">
          <a id="UpRiseNFTAdr" href="https://bscscan.com/address/0x0000000000000000000000000000000000" target="_tab">
            0x0000000000000000000000000000000000
          </a>
          <a id="copyUpRiseNFTAdr" className="button scrollto" onClick={() => {window.copyAdr('copyUpRiseNFTAdr', '0x0000000000000000000000000000000000');}}>
            Copy NFT address to visualize it in your wallet
          </a>
          <p></p>
        </div>


        <div className="row">
          <div className="col-12 col-lg-6 text-justify content">
            <div className="section-title">
              <h2>Epic</h2>
              <p>Need to hold at least: 2B <img src="assets/img/logo.png" className="small-icon"/> UP</p>
              <p>Price: 0.25 <img src="assets/img/trade/bin.ico" className="small-icon"/> BNB</p>
              <p>You will get <span>0.5%</span> Tax Reduction</p>
              <div className="row">
                <div className="col-12 col-lg-6 text-justify content">
                  <div style={divStyle}>
                    <div style={divStyle2}>
                      <a href="assets/img/nft/origins/EpicYang.png" target="_tab">
                        <picture>
                          <source id="diamondBoy" media="(max-width:992px)" srcSet="assets/img/nft/origins/EpicYang_300.png" style={imgStyle}/>
                          <img id="diamondBoy" src="assets/img/nft/origins/EpicYang_300.png" style={imgStyle} />
                        </picture>
                        <img id="epicBorder" src="" style={imgStyle2}/>
                      </a>
                    </div>
                  </div>
                  <p>Can only hold 1 per wallet</p>
                  <p><a id="NFTcountDown" className="button scrollto" onClick={() => {window.mintNFT('diamond', true);}}>Mint!</a></p>
                  <p id="mintDiamondBoyResult"></p>
                </div>
                <div className="col-12 col-lg-6 text-justify content">
                  <div style={divStyle}>
                    <div style={divStyle2}>
                      <a href="assets/img/nft/origins/EpicYin.png" target="_tab">
                        <picture>
                          <source id="diamondGirl" media="(max-width:992px)" srcSet="assets/img/nft/origins/EpicYin_300.png" style={imgStyle}/>
                          <img id="diamondGirl" src="assets/img/nft/origins/EpicYin_300.png" style={imgStyle} />
                        </picture>
                        <img id="epicBorder" src="" style={imgStyle2}/>
                      </a>
                    </div>
                  </div>
                  <p>Can only hold 1 per wallet</p>
                  <p><a id="NFTcountDown" className="button scrollto" onClick={() => {window.mintNFT('diamond', false);}}>Mint!</a></p>
                  <p id="mintDiamondGirlResult"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 text-justify content">
            <div className="section-title">
              <h2>Legendary</h2>
              <p>Need to hold at least: 20B <img src="assets/img/logo.png" className="small-icon"/> UP</p>
              <p>Price: 0.5 <img src="assets/img/trade/bin.ico" className="small-icon"/> BNB</p>
              <p>You will get <span>1%</span> Tax Reduction</p>
              <div className="row">
                <div className="col-12 col-lg-6 text-justify content">
                  <div style={divStyle}>
                    <div style={divStyle3}>
                      <a href="assets/img/nft/origins/LegendaryYang.mp4" target="_tab">
                        <picture>
                          <source id="emeraldBoy" media="(max-width:992px)" srcSet="assets/img/nft/origins/LegendaryYang_300.gif" style={imgStyle}/>
                          <img id="emeraldBoy" src="assets/img/nft/origins/LegendaryYang_300.gif" style={imgStyle} />
                        </picture>
                        <img id="legendaryBorder" src="" style={imgStyle2}/>
                      </a>
                    </div>
                  </div>
                  <p>Can only hold 1 per wallet</p>
                  <p><a id="NFTcountDown" className="button scrollto" onClick={() => {window.mintNFT('emerald', true);}}>Mint!</a></p>
                  <p id="mintEmeraldBoyResult"></p>
                </div>
                <div className="col-12 col-lg-6 text-justify content">
                  <div style={divStyle}>
                    <div style={divStyle3}>
                      <a href="assets/img/nft/origins/LegendaryYin.mp4" target="_tab">
                        <picture>
                          <source id="emeraldGirl" media="(max-width:992px)" srcSet="assets/img/nft/origins/LegendaryYin_300.gif" style={imgStyle}/>
                          <img id="emeraldGirl" src="assets/img/nft/origins/LegendaryYin_300.gif" style={imgStyle} />
                        </picture>
                        <img id="legendaryBorder" src="" style={imgStyle2}/>
                      </a>
                    </div>
                  </div>
                  <p>Can only hold 1 per wallet</p>
                  <p><a id="NFTcountDown" className="button scrollto" onClick={() => {window.mintNFT('emerald', false);}}>Mint!</a></p>
                  <p id="mintEmeraldGirlResult"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

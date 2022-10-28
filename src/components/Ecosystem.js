import React from 'react';
import { Link } from "react-router-dom";

function Ecosystem() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font30px = {fontSize: "30px"};
  const widthFull = {width: "100%"};
  
  return (
    <section id="Ecosystem">
      <div className="container">

        <div className="section-title">
          <h2>Ecosystem</h2>
          <p>Actual <span>USECASE</span> of the UpRise</p>
        </div>

        <div className="row">
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/UPLOGO.png"/>
              <h2>Token</h2>
              <h6>20+ Features. 10+ Utilities. All in One</h6>
              <p>Enjoy all the things and get <span>profit!</span></p>

              <p><Link id="tokenLink" to="/UpRise" className="button scrollto">UpRise</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/NFTs.png"/>
              <h2>NFT</h2>
              <h6>Limited Sale. Holders Only. Special Perks</h6>
              <p>Buy NFT to get <span>Tax Reduction!</span></p>
              <p><Link id="NFTLink" to="/nft" className="button scrollto">NFT</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Swap.png"/>
              <h2>Swap</h2>
              <h6>Buy Easily. Trade Faster. Just click</h6>
              <p><span>really easy swap tool</span> to help you!</p>
              <p><Link to="/swap" className="button scrollto">Swap</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Swap.png" />
              <h2>Fiat</h2>
              <h6>Prepare Fiat. Just click. Get BNB</h6>
              <p><span>another easy swap tool</span> to help you!</p>
              <p><Link to="/fiat" className="button scrollto">Fiat</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Staking.png"/>
              <h2>Staking</h2>
              <h6>Buy UP. Stake UP. Earn UP</h6>
              <p>Stake your UP to get much more UP rewards!</p>
              <p><Link to="/Staking" className="button scrollto">Staking</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Rewards.png"/>
              <h2>Rewards</h2>
              <h6>Buy UP. Hold UP. Earn BNB</h6>
              <p>Buy/Hold UP to get much more BNB Rewards!</p>
              <p><Link to="/Rewards" className="button scrollto">Rewards</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/NFTs.png"/>
              <h2>NFT Avatar</h2>
              <h6>8 Parts. 4 Grades. 3 Perks</h6>
              <p>Decorate your avatar with useful items!</p>
              <p><Link id="P2ELink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Mystery_Box.png"/>
              <h2>Mystery Box</h2>
              <h6>Random items. Try your luck. More to Come.</h6>
              <p>Open the box to get legendary items!</p>
              <p><Link id="MysteryLink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Coin_Vote.png"/>
              <h2>Coin Vote</h2>
              <h6>Vote for Coin. No bots. Real Metric</h6>
              <p>Vote for the next "buy the dip" reward token!</p>
              <p><a id="coinVoteLink" href="https://UPvote.com" className="button scrollto button-upgrade">Upgrading!</a></p>
            </div>
          </div>


          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Marketplace.png"/>
              <h2>Marketplace</h2>
              <h6>Buy NFT. Sell NFT. Trade NFT</h6>
              <p>The place for all your NFTs. Hold UP and earn a percentage of every tx fee!</p>
              <p><Link id="MarketplaceLink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/P2E_Game.png"/>
              <h2>UpRise wars</h2>
              <h6>Play Games. Enjoy the Ride. Earn UP</h6>
              <p>Join the competition to be the #1 rocketcycle rider!</p>
              <p><Link id="P2ELink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>

          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/NFT_Farming.png"/>
              <h2>NFT Farming</h2>
              <h6>Put your NFTs to work!</h6>
              <p>Earn passive income by staking your NFTs</p>
              <p><Link id="MysteryLink" to="" className="button button-soon scrollto">Coming 0xfb6c636cebf7e6607aa2fa597c4dccf485fafa22</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/Safu_Checker.png"/>
              <h2>SAFU Checker</h2>
              <h6>don't get rugpulled again!</h6>
              <p>A top of the line honeypot and rugpull scanner FREE for UP holders</p>
              <p><Link id="MysteryLink" to="" className="button button-soon scrollto">Coming 0xfb6c636cebf7e6607aa2fa597c4dccf485fafa22</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/merchandise.png"/>
              <h2>UP Store</h2>
              <h6>Shop your favorite brands</h6>
              <p>A blockchain store with all cryptocurrencies accepted, with discount for UP holders</p>
              <p><Link id="MysteryLink" to="" className="button button-soon scrollto">Coming 0xfb6c636cebf7e6607aa2fa597c4dccf485fafa22</Link></p>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-justify content">
            <div className="section-title">
              <img className="ecosystemImage" src="assets/img/ecosystemLogos/card.png"/>
              <h2>UP Card</h2>
              <h6>Load.Pay.Earn</h6>
              <p>Pay with crypto anywhere and everywhere, bigger cashbacks and rewards for UP holders</p>
              <p><Link id="MysteryLink" to="" className="button button-soon scrollto">Coming Soon</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;

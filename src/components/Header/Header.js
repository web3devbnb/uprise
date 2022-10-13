import React from 'react';
import { Link } from "react-router-dom";

export function Header() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};  

  return (
    <header id="Header">
      <i className="bi bi-list mobile-nav-toggle"></i>
      <Link to="/main" className="logo d-flex align-items-center no-underline">
        <img src="assets/img/logo_100.png" className="small-icon" alt="" style={{margin:"10px"}}/>
        <h6 className="desktop">UpRise</h6>
      </Link>
        
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li className="dropdown">
            <a className="nav-link scrollto" >Token<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><Link to="/UpRise">Features</Link></li>
              <li><Link to="/swap">Swap</Link></li>
              <li><Link to="/fiat">Fiat</Link></li>
              <li><Link to="/staking">Staking</Link></li>
              <li><Link to="/rewards">Rewards</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link scrollto" >NFT<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><Link to="/nft">NFT Origin</Link></li>
              <li><a >NFT MarketPlace <span>(Soon!)</span></a></li>

            </ul>
          </li>
          <li className="dropdown">
            <a className="nav-link scrollto" >Play<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><Link to="/p2egame">P2E Game</Link></li>
              <li><a href="/">Lotttery <span>(Soon!)</span></a></li>
              <li><a href="/">Trade Competition <span>(Soon!)</span></a></li>
              <li><a>UP & DOWN  <span>(Soon!)</span></a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a  className="nav-link scrollto" >Utility<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/">Shilling Competition <span>(Free 25$!)</span></a></li>
              <li><a href="/">Coin Vote <span>(Soon!)</span></a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a  className="nav-link scrollto" >About<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><Link to="/roadmap">Roadmap</Link></li>
              <li><a href="">Whitepaper</a></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a  className="nav-link scrollto" >Community<i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="https://t.me/UpriseTG">Telegram <span>(JOIN!)</span></a></li>
              <li><a href="https://reddit.com/u/Uprise">Reddit <span>(SUB!)</span></a></li>
              <li><a href="/">Twitter <span>(Follow!)</span></a></li>
              <li><a href="/">Announcements <span>(Follow!)</span></a></li>
            </ul>
          </li>
          <i id="curStatus" className="bi" title='
            <p id="cbStatus" class="white"></p>
            <p id="cbDuration" class="white"></p>
            <a href="https://UpRise.gitbook.io/UpRise/special-features/advanced-tax-algorithms#stabilizing-the-market-more">
              <i class="bi bi-info-circle text-primary" style="font-size: 25px;"></i>
            </a>
          ' style={{ fontSize: "25px" }} ></i>
          {/*<li>*/}
          {/*  <div className="box">*/}
          {/*    <div className="switch">*/}
          {/*      <div className="yoke"></div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</li>*/}
        </ul>
      </nav>

      <div className="row listed" style={{display: "contents"}}>
        <div style={{padding:"0px", margin:"5px"}}><span id="curPrice"></span>$ = UP</div>
        <Link to="/swap" className="button scrollto" style={{margin:"0px", marginRight:"5px"}}>BUY!</Link>
      </div>

      <nav id="connectButton" className="header-nav ms-auto" style={ {marginRight:"50px"} }>
        <div className="text-center">
          <a  id="connect" className="button scrollto" onClick={window.afconnect}>Connect Wallet</a>
        </div>
      </nav>
    </header>
  );
}

export function HeaderMargin() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};  

  return (
    <div id="HeaderMargin" style={{marginTop: "90px"}}>
      
    </div>
  );
}

export default Header;

import React from 'react';

import { Link } from "react-router-dom";

function SwapPage() {
  return (
    <section id="Splash">
      <video className="video" autoPlay loop muted>
        <source src="assets/vids/Splash.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h2>Introduce yourself into</h2>
        <h1>UPFINITY</h1>
        <p>Experience a stay in a world wide ecosystem where every feature and utility works in your favor.</p>
        <p>JOIN US, TREAT YOURSELF</p>
        <div className="redirect">
          <h2><Link to="/main">LET ME IN </Link></h2>
          <h2><Link to="/ecosystem">I'D LIKE TO LEARN MORE</Link></h2>
        </div>
      </div>
    </section>
 
  );
}

export default SwapPage;
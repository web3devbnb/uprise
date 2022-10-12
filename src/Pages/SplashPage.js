import React from 'react';

import { Link } from "react-router-dom";

function SwapPage() {
  return (
    <section id="Splash">
      <video className="video" autoPlay loop muted>
        <source src="assets/vids/Splash.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h2>Come Indulge yourself in</h2>
        <h1>UpRise</h1>
        <p>Take advantage of every feature and utility in a world-wide ecosystem.</p>
        <p>JOIN US, Take Care Of Yourself</p>
        <p>Launching Soon!</p>
        <p>Check <a href="https://t.me/UpriseTG">Telegram</a> and <a href="">Wsite!</a></p>
        <div className="redirect">
          <h2 className="button"><Link to="/main">Enter</Link></h2>
          <h2 className="button"><Link to="/ecosystem">I'D LIKE TO LEARN MORE</Link></h2>
        </div>
      </div>
    </section>
 
  );
}

export default SwapPage;
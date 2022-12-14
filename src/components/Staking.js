import React from 'react';

function Staking() {
  const menu = {width:"20px", height:"20px"};
  const white = {color: "#fff"};
  const baseFontColor = {color: "#aaaaaa"};
  const center = {margin: "0 auto"};
  const noMargin = {margin: "0px"};
  const width30px = {width: "30px"};
  const font2_5em = {fontSize: "2em"};
  const font0_5em = {fontSize: "0.5em"};
  
  return (
    <section id="Staking" className="container">
      <div className="section-title">
        <h2>Staking</h2>
        <p>Stake <img src="assets/img/logo.png" className="small-icon"/>UP, Earn <img src="assets/img/logo.png" className="small-icon"/>UP</p>
        <p>Rewards are <span>auto-staked/compounded</span></p>

        <div className="row">
          <div className="col-12 col-md-4">
            <p>Total Value Locked (TVL)</p>
            <span id="totalValueLocked" className="text-center" style={font2_5em}></span>
          </div>
          <div className="col-12 col-md-4">
            <p>Total UP Staked</p>
            <span id="totalStaked" className="text-center" style={font2_5em}></span><img src="assets/img/logo.png" className="small-icon"/>UP
          </div>
          <div className="col-12 col-md-4">
            <p>Total UP Rewarded</p>
            <span id="_totalFundsUsed" className="text-center" style={font2_5em}></span><img src="assets/img/logo.png" className="small-icon"/>UP
          </div>  
        </div>
        <p>Staking Contract Address</p>
        <a href="https://bscscan.com/address0x622aecc4287dc6341bdfb0c18c580c54043ce287" target="_tab">
          0x622aecc4287dc6341bdfb0c18c580c54043ce287
        </a>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6 text-justify content">
          <h3>Stake</h3>
          <span>Stake Season 1 Finished by giving 80,000,000,000 UP!</span>
          <div>Stake Season 2 Started!</div>
          <div><i className="bi bi-chevron-right"></i>Connect wallet</div>

          <div><i className="bi bi-chevron-right"></i>Click 'approve' and confirm in wallet dapp</div>
          <a id="approveStake" className="button button-soon scrollto"></a>

          <div><i className="bi bi-chevron-right"></i>Write down amount to Stake <span>(max 30B)</span></div>
          <div style={{border: "solid 3px", borderRadius: "16px", background: "white"}}>
            <input id="typedStakeAmount" defaultValue="" inputMode="decimal" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="Write down amount to stake" style={{caretColor: "black", color: "black", textAlign: "center", backgroundColor: "white"}} />
            <div>
              <img id="UPlogo" className="small-icon" src="assets/img/logo.png" style={{width30px}}/>
              UP
            </div>
          </div>

          <div><i className="bi bi-chevron-right"></i>Select one Stake Duration and confirm in wallet dapp</div>
          <a id="stake1d" className="button button-soon scrollto" onClick={() => window.fstake(7)}></a>
          <a id="stake7d" className="button button-soon scrollto" onClick={() => window.fstake(28)}></a>
          <a id="stake28d" className="button button-soon scrollto" onClick={() => window.fstake(84)}></a>
          <span id="stakeLog"></span>

        </div>
        <div className="col-12 col-lg-6 pt-4 pt-lg-0 content">
          <h3>Unstake</h3>
          <div className="row mt-5 bold" style={{fontSize: "3em"}}>
            <div className="col-6 align-items-stretch">
              <div className="icon-box">
                <h6 className="text-center ">Your Rewards</h6>
                <div id="calculateReward" className="text-center" style={font0_5em}></div>UP
              </div>
            </div>
            <div className="col-6 align-items-stretch">
              <div className="icon-box">
                <h6 className="text-center ">Your claimed rewards</h6>
                <div id="_claimedAmounts" className="text-center" style={font0_5em}></div>UP
              </div>
            </div>
          </div>

          <div><i className="bi bi-chevron-right"></i>Connect wallet</div>

          <div><i className="bi bi-chevron-right"></i>Click 'Unstake' and confirm in wallet dapp</div>
          <a id="unstake" className="button button-soon scrollto" onClick={window.funstake}>Stake First</a>

          <div><i className="bi bi-chevron-right"></i>UP will be unstaked <span>with rewards</span></div>
        </div>
      </div>

    </section>
  );
}


export default Staking;

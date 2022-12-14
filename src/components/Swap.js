import React from 'react';
import { Link } from "react-router-dom";

function Swap() {
  const menu = { width: "20px", height: "20px" };
  const white = { color: "#fff" };
  const baseFontColor = { color: "#aaaaaa" };
  const center = { margin: "0 auto" };
  const noMargin = { margin: "0px" };
  const width30px = { width: "30px" };

  return (
    <section id="Swap">
      <div className="row">
        <div className="col-12 col-lg-6">
          <Buy />
        </div>
        <div className="col-12 col-lg-6">
          <Sell />
        </div>
      </div>
    </section>
  );
}

export function Buy() {
  const menu = { width: "20px", height: "20px" };
  const white = { color: "#fff" };
  const baseFontColor = { color: "#aaaaaa" };
  const center = { margin: "0 auto" };
  const noMargin = { margin: "0px" };
  const width30px = { width: "30px" };

  return (
    <section id='Buy'>
      <div className="container" style={{padding: "0px"}}>
        <div className="sc-jSFjdj sc-dIvrsQ kJmatq hdzOgI">
          <div className="sc-jSFjdj sc-gKAaRy sc-vMGZd kJmatq jcNvwq jsAPRX">
            <div className="sc-jSFjdj sc-gKAaRy cpromH togOu">
              <div className="sc-jSFjdj sc-gKAaRy kJmatq iIdAKa">
                <h2 color="text" className="sc-gtsrHT sc-kLojOw iGtzpP jDXLmf text-center">Buy</h2>
                <div className="sc-jSFjdj sc-gKAaRy kJmatq togOu text-center" style={{margin: "10px"}}>
                  <div color="textSubtle" fontSize="14px" className="sc-gtsrHT llSJBl"><span>Buy</span> UP easily / instantly</div>
                  <div>Buy Status: <span id="BuyStatus"></span></div>
                </div>
              </div>
            </div>
          </div>
          <div id="swap-page" className="sc-gpEJdM jdQeRJ">
            <div id="swap-input" className="sc-enrZtP cXbVbC">
              <div id="swap-currency-input" className="swap-input">
                <div className="sc-eTTTle hCspWz" style={{padding: "15px"}}>
                  <div className="sc-fSvVUw fLBCdk" style={{justifyContent: "space-between"}}>
                    <div className="sc-jSFjdj sc-knSFqH sc-kSCemg kJmatq gIlUEd OGHxE" style={{display: "flex", justifyContent: "space-between"}}>
                      <div fontSize="14px" color="text" className="sc-gtsrHT jFEWVt no-margin">From</div>
                      <div fontSize="14px" color="text" className="sc-gtsrHT jFEWVt no-margin" style={{display: "inline", cursor: "pointer"}}>
                        Balance:
                        <div id="BNBbalance" className="no-margin" style={{display: "inline"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-fVnRWS idBnak" style={{display: "flex"}}>
                    <input id="buyInput" title="Type BNB Amount do buy UP" className="token-amount-input no-margin text-left" inputMode="decimal" autoComplete="off" autoCorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minLength="1" maxLength="79" spellCheck="false" defaultValue="" style={{caretColor: "white", color: "white"}}/>
                    <button className="sc-hKFxyN jYLfuR sc-iJKVRt eyGnew open-currency-select-button no-margin" scale="sm" style={{justifyContent: "space-between", border: "0px", backgroundColor: "#00000000"}}>
                      <div className="sc-jSFjdj sc-gKAaRy kJmatq eqGhLO no-margin" style={{justifyContent: "space-between", display: "flex", alignItems: "center"}}>
                        <img id="BNBlogo" src="assets/img/trade/bin.ico" style={{width: "30px"}}/>
                        <div id="BNBtarget" color="text" className="sc-gtsrHT MlLjM" style={{display: "flex", textAlign: "left", margin: "10px", color: "#aaaaaa"}}>BNB</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div id="swap-currency-input" className="swap-input">
                <div className="sc-eTTTle hCspWz" style={{padding: "15px"}}>
                  <div className="sc-fSvVUw fLBCdk" style={{justifyContent: "space-between"}}>
                    <div className="sc-jSFjdj sc-knSFqH sc-kSCemg kJmatq gIlUEd OGHxE" style={{display: "flex", justifyContent: "space-between"}}>
                      <div fontSize="14px" color="text" className="sc-gtsrHT jFEWVt no-margin">To (Estimated)</div>
                      <div fontSize="14px" color="text" className="sc-gtsrHT jFEWVt no-margin" style={{display: "inline", cursor: "pointer"}}>
                        Balance:
                        <div id="UPbalance" style={{display: "inline"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-fVnRWS idBnak" style={{
            display: "flex",
                  }}>
                    <input id="buyOutput" className="sc-iMCRTP iOdHiq token-amount-input text-left" inputMode="decimal" autoComplete="off" autoCorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minLength="1" maxLength="79" spellCheck="false" defaultValue="" style={{ caretColor: "white", color: "white" }} readOnly />
                    <button className="sc-hKFxyN jYLfuR sc-iJKVRt eyGnew open-currency-select-button" scale="sm" style={{
            justifyContent: "space-between",
            border: "0px",
            backgroundColor: "#00000000",
                    }}>
                      <div className="sc-jSFjdj sc-gKAaRy kJmatq eqGhLO" style={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
                      }}>
                        <img id="UPlogo" src="assets/img/logo.png" style={width30px}/>
                        <div id="UPtarget" color="text" className="sc-gtsrHT MlLjM" style={{
            display: "flex",
            textAlign: "left",
            margin: "10px",
            color: "#aaaaaa",
                        }}>UP</div>
                      </div>
                    </button>
                  </div>
                  <div className="sc-fVnRWS idBnak" style={{
                    display: "flex",
                  }}>
                    +
                    <input id="buyOutputMore" className="token-amount-input text-left" inputMode="decimal" title="Token Amount" autoComplete="off" autoCorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minLength="1" maxLength="79" spellCheck="false" defaultValue=""
                      style={{ caretColor: "white", color: "white", width: "40%", padding: "0px"}} readOnly />
                    <div className="no-margin">by <Link to="/nft">Buying NFT</Link></div>
                  </div>
                </div>
              </div>
              <div className="sc-enrZtP bxRIiB" style={{padding: "0px 16px"}}></div>
            </div>
            <div className="sc-jSFjdj jRqThc">
              <div className="sc-jSFjdj jRqThc">
                <div className="row">
                  <div className="col-12">
                    <a id="swapBuy" className="button scrollto" id="swap-button" width="100%" scale="md" style={{
                alignItems: "center",
                border: "0px",
                borderRadius: "16px",
                boxShadow: "0px 0px 5px 5px #0DCAF077",
                cursor: "pointer",
                display: "inline-flex",
                fontFamily: "inherit",
                fontSize: "16px",
                fontWeight: 600,
                justifyContent: "center",
                lineHeight: 1,
                opacity: 1,
                outline: "0px",
                transition: "background-color 0.2s ease 0s, opacity 0.2s ease 0s",
                height: "48px",
                padding: "0px 24px",
                margin: "10px 0px",
                color: "white",
                width: "95%"
                    }} onClick={window.fbuyUP}>Swap</a>
                  </div>
                </div>
              </div>
              <div id="swapResult"></div>
              <div>
                <a className="scrollto" onClick={window.addUP}>
                  Click here to add UP in wallet
                </a>
              </div>
              <div>
                You could also buy at:
                <a id="PanCakeSwapLink" href="https://pancakeswap.finance/swap?outputCurrency=0xfb6c636cebf7e6607aa2fa597c4dccf485fafa22" className="scrollto">
                  <img src="assets/img/trade/pcs_100.ico" style={width30px}/>
                </a>
                <a id="PoocoinSwapLink" href="https://poocoin.app/swap/?outputCurrency=0xfb6c636cebf7e6607aa2fa597c4dccf485fafa22" className="scrollto">
                  <img src="assets/img/trade/poo_100.png" style={width30px}/>
                </a>
              </div>
              <div>
                Check live chart at:
                <a id="DextoolsChartLink" href="https://www.dextools.io/app/bsc/pair-explorer/0xd3ab58a10eab5f6e2523b53a78c6a8d378488c9a" className="scrollto">
                  <img src="assets/img/trade/dext_100.ico" style={width30px}/>
                </a>
                <a id="PoocoinChartLink" href="https://poocoin.app/tokens/0xfb6c636cebf7e6607aa2fa597c4dccf485fafa22" className="scrollto">
                  <img src="assets/img/trade/poo_100.png" style={width30px}/>
                </a>
                <div><Link to="/fiat">Buy BNB/BUSD with Fiat!</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




export function Sell() {
  const menu = { width: "20px", height: "20px" };
  const white = { color: "#fff" };
  const baseFontColor = { color: "#aaaaaa" };
  const center = { margin: "0 auto" };
  const noMargin = { margin: "0px" };
  const width30px = { width: "30px" };

  return (
    <section id="Sell">
      <div className="container" style={{ padding: "0px" }}>
        <div className="sc-jSFjdj sc-dIvrsQ kJmatq hdzOgI">
          <div className="sc-jSFjdj sc-gKAaRy sc-vMGZd kJmatq jcNvwq jsAPRX">
            <div className="sc-jSFjdj sc-gKAaRy cpromH togOu">
              <div className="sc-jSFjdj sc-gKAaRy kJmatq iIdAKa">
                <h2 color="text" className="sc-gtsrHT sc-kLojOw iGtzpP jDXLmf text-center">Sell</h2>
                <div className="sc-jSFjdj sc-gKAaRy kJmatq togOu text-center" style={{ margin: "10px" }}>
                  <div color="textSubtle" fontSize="14px" className="sc-gtsrHT llSJBl"><span>Sell</span> UP easily / instantly</div>
                  <div>Sell Status: <span id="SellStatus"></span></div>
                  <a id="approveRouter" className="button scrollto"></a>
                </div>
              </div>
            </div>
          </div>
          <div id="swap-page" className="sc-gpEJdM jdQeRJ">
            <div id="swap-input" className="sc-enrZtP cXbVbC">
              <div id="swap-currency-input" className="swap-input">
                <div className="sc-eTTTle hCspWz" style={{ padding: "15px" }}>
                  <div className="sc-fSvVUw fLBCdk" style={{ justifyContent: "space-between" }}>
                    <div className="sc-jSFjdj sc-knSFqH sc-kSCemg kJmatq gIlUEd OGHxE" style={{ display: "flex", justifyContent: "space-between" }}>
                      <div fontSize="14px" color="text" className="sc-gtsrHT jFEWVt no-margin">From</div>
                      <div fontSize="14px" color="text" className="sc-gtsrHT jFEWVt no-margin" style={{ display: "inline", cursor: "pointer" }}>
                        Balance:
                        <div id="UPbalance" className="no-margin" style={{ display: "inline" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-fVnRWS idBnak" style={{ display: "flex" }}>
                    <input id="sellInput" className="token-amount-input no-margin text-left" inputMode="decimal" autoComplete="off" autoCorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minLength="1" maxLength="79" spellCheck="false" defaultValue="" style={{ caretColor: "white", color: "white" }} />
                    <button className="sc-hKFxyN jYLfuR sc-iJKVRt eyGnew open-currency-select-button no-margin" scale="sm" style={{ justifyContent: "space-between", border: "0px", backgroundColor: "#00000000" }}>
                      <div className="sc-jSFjdj sc-gKAaRy kJmatq eqGhLO no-margin" style={{ justifyContent: "space-between", display: "flex", alignItems: "center" }}>
                        
                        <img id="UPlogo" src="assets/img/logo.png" style={{ width: "30px" }} />
                        <div id="UPtarget" color="text" className="sc-gtsrHT MlLjM" style={{ display: "flex", textAlign: "left", margin: "10px", color: "#aaaaaa" }}>UP</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div id="swap-currency-input" className="swap-input">
                <div className="sc-eTTTle hCspWz" style={{ padding: "15px" }}>
                  <div className="sc-fSvVUw fLBCdk" style={{ justifyContent: "space-between" }}>
                    <div className="sc-jSFjdj sc-knSFqH sc-kSCemg kJmatq gIlUEd OGHxE" style={{ display: "flex", justifyContent: "space-between" }}>
                      <div fontSize="14px" color="text" className="sc-gtsrHT jFEWVt no-margin">To (Estimated)</div>
                      <div fontSize="14px" color="text" className="sc-gtsrHT jFEWVt no-margin" style={{ display: "inline", cursor: "pointer" }}>
                        Balance:
                        <div id="BNBbalance" style={{ display: "inline" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-fVnRWS idBnak" style={{
                    display: "flex",
                  }}>
                    <input id="sellOutput" className="sc-iMCRTP iOdHiq token-amount-input text-left" inputMode="decimal" autoComplete="off" autoCorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minLength="1" maxLength="79" spellCheck="false" defaultValue="" style={{ caretColor: "white", color: "white" }} readOnly />
                    <button className="sc-hKFxyN jYLfuR sc-iJKVRt eyGnew open-currency-select-button" scale="sm" style={{
                      justifyContent: "space-between",
                      border: "0px",
                      backgroundColor: "#00000000",
                    }}>
                      <div className="sc-jSFjdj sc-gKAaRy kJmatq eqGhLO" style={{
                        justifyContent: "space-between",
                        display: "flex",
                        alignItems: "center",
                      }}>
                        <img id="BNBlogo" src="assets/img/trade/bin.ico" style={width30px} />
                        <div id="BNBtarget" color="text" className="sc-gtsrHT MlLjM" style={{
                          display: "flex",
                          textAlign: "left",
                          margin: "10px",
                          color: "#aaaaaa",
                        }}>BNB</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="sc-enrZtP bxRIiB" style={{ padding: "0px 16px" }}></div>
            </div>
            <div className="sc-jSFjdj jRqThc">
              <div className="sc-jSFjdj jRqThc">
                <div className="row">
                  <div className="col-12">
                    <a id="swapBuy" className="button scrollto" id="swap-button" width="100%" scale="md" style={{
                      alignItems: "center",
                      border: "0px",
                      borderRadius: "16px",
                      boxShadow: "0px 0px 5px 5px #0DCAF077",
                      cursor: "pointer",
                      display: "inline-flex",
                      fontFamily: "inherit",
                      fontSize: "16px",
                      fontWeight: 600,
                      justifyContent: "center",
                      lineHeight: 1,
                      opacity: 1,
                      outline: "0px",
                      transition: "background-color 0.2s ease 0s, opacity 0.2s ease 0s",
                      height: "48px",
                      padding: "0px 24px",
                      margin: "10px 0px",
                      color: "white",
                      width: "95%"
                    }} onClick={window.fsellUP}>Swap</a>
                  </div>
                </div>
              </div>
              <div id="sellResult"></div>
              {/*<div>*/}
              {/*  <a className="scrollto" onClick={window.addUP}>*/}
              {/*    Click here to add UP in wallet*/}
              {/*  </a>*/}
              {/*</div>*/}
              {/*<div>*/}
              {/*  You could also buy at:*/}
              {/*  <a id="PanCakeSwapLink" href="https://pancakeswap.finance/swap?outputCurrency=0xfb6c636cebf7e6607aa2fa597c4dccf485fafa22" className="scrollto">*/}
              {/*    <img src="assets/img/trade/pcs.ico" style={width30px} />*/}
              {/*  </a>*/}
              {/*  <a id="PoocoinSwapLink" href="https://poocoin.app/swap/?outputCurrency=0xfb6c636cebf7e6607aa2fa597c4dccf485fafa22" className="scrollto">*/}
              {/*    <img src="assets/img/trade/poo.png" style={width30px} />*/}
              {/*  </a>*/}
              {/*</div>*/}
              {/*<div>*/}
              {/*  Check live chart at:*/}
              {/*  <a id="DextoolsChartLink" href="https://www.dextools.io/app/bsc/pair-explorer/0xd3ab58a10eab5f6e2523b53a78c6a8d378488c9a" className="scrollto">*/}
              {/*    <img src="assets/img/trade/dext.ico" style={width30px} />*/}
              {/*  </a>*/}
              {/*  <a id="PoocoinChartLink" href="https://poocoin.app/tokens/0xfb6c636cebf7e6607aa2fa597c4dccf485fafa22" className="scrollto">*/}
              {/*    <img src="assets/img/trade/poo.png" style={width30px} />*/}
              {/*  </a>*/}
              {/*  <div><Link to="/fiat">Buy BNB/BUSD with Fiat!</Link></div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Swap;

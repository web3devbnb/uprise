
getExtFile('Airdrop', 'sections/Airdrop.html');
getExtFile('Donations', 'sections/Donations.html');
getExtFile('Ecosystem', 'sections/Ecosystem.html');
getExtFile('FAQs', 'sections/FAQs.html');
getExtFile('Features', 'sections/Features.html');
getExtFile('footer', 'sections/Footer.html'); // footer
// getExtFile('Gallery', 'sections/Gallery.html');
getExtFile('header', 'sections/Header.html'); // header
// getExtFile('hero', 'sections/Home.html'); // hero
getExtFile('Motivation', 'sections/Motivation.html');
getExtFile('Notice', 'sections/Notice.html');
getExtFile('Patchs', 'sections/Patchs.html');
getExtFile('Rewards', 'sections/Rewards.html');
getExtFile('Roadmap', 'sections/Roadmap.html');
getExtFile('SAFUs', 'sections/SAFUs.html');
getExtFile('Status', 'sections/Status.html');
getExtFile('Taxs', 'sections/Taxs.html');
// getExtFile('Testimonials', 'sections/Testimonials.html');
getExtFile('UpFinomics', 'sections/UpFinomics.html');

$('#popup').show();
$(document).click(function (e) {
  if ($('#popup').is(':visible')) {
    $('#popup').hide();
  }
});
(async function() { // to use async things 
  console.log('init');
  
  console.log('init done');
  
  
//   } catch (e) {
// if (e['message'] == 'Internal JSON-RPC error.') {
//     if (e['data']['message'] == 'header not found') {
// console.log('run again');
//     }
// }
// }
  
//   int count = 0;
// int maxTries = 3;
// while(true) {
//     try {
//         // Some Code
//         // break out of loop, or return, on success
//     } catch (SomeException e) {
//         // handle exception
//         if (++count == maxTries) throw e;
//     }
// }
 
  /////////////////////////////////////////////////////////////
  // inits

  if (location.hostname == "") {
    console.log('local');
    return;

  }
  
  if (typeof window.ethereum === 'undefined') {
    console.log('no dapp');
    return;
  }
  
  connectWalletText = "<span>Loading, Connect wallet to use claim, etc!</span>";
  displayText("connectResult", connectWalletText);
  displayText("balanceStatus", connectWalletText);
  <!-- displayText("balanceIcon", connectWalletText); --> // big icon
  displayText("oneBuyLimitStatus", connectWalletText);
  displayText("oneSellLimitStatus", connectWalletText);
  
  displayText("claimable", connectWalletText);
  displayText("claimed", connectWalletText);

  displayText_("BNBbalance", connectWalletText);
  displayText_("UPFbalance", connectWalletText);
  
  
  
  ethereum.on('chainChanged', handleChainChanged);
  ethereum.on('accountsChanged', handleAccountsChanged);
    
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();    
  
  syncDelay(100);
  network = await provider.getNetwork();
  chainId = network.chainId;
  if (chainId == 56) {
    console.log('mainnet');
    rewardAdr = '0x373764c3deD9316Af3dA1434ccba32caeDeC09f5';
    freeAirdropAdr = '0x17f90D36E2B11999CBEbf5E36e09E7079Ea9e2a4';
    airdropAdr = '0x53a1239a6C3c0cD6458C7Ee9c07815544a537004';
    nftAdr = '0x24DF47F315E1ae831798d0B0403DbaB2B9f1a3aD';
  } else {
    alert('Change to BSC network and refresh!');
    return;
  }
    
  routerF = (new ethers.Contract(routerAdr, routerAbi, provider)).functions;
  factoryAdr = CALL(routerF, 'factory')[0];
  factoryF = (new ethers.Contract(factoryAdr, factoryAbi, provider)).functions;
  
  pairAdr = CALL(factoryF, 'getPair', [wbnbAdr, upfinityAdr])[0];
  pairF = (new ethers.Contract(pairAdr, pairAbi, provider)).functions;
  
  upfinityF = (new ethers.Contract(upfinityAdr, upfinityAbi, provider)).functions;
  rewardF = (new ethers.Contract(rewardAdr, rewardAbi, provider)).functions;
  freeAirdropF = (new ethers.Contract(freeAirdropAdr, freeAirdropAbi, provider)).functions;
  airdropF = (new ethers.Contract(airdropAdr, airdropAbi, provider)).functions;
  nftF = (new ethers.Contract(nftAdr, nftAbi , provider)).functions;
  
  syncDelay(50);
  
  x = getElement("referralAdrDisplay");
  if (x != null) {
    refAdr = GetURLParameter("ref");
    if (typeof refAdr === 'undefined') {
    
      x.innerHTML = 'None';
    } else {
      refAdr = getChecksumAddress(refAdr);
      if (refAdr == '') {
        x.innerHTML = 'Wrong Format';
      } else {
        x.innerHTML = refAdr;
      }
    }
  }
  
  // without wallet connection
  
  // constants
  
  totalSupply = CALL(upfinityF, 'totalSupply')[0];
  _accuMulFactor = CALL(upfinityF, '_accuMulFactor')[0] / 1;
  
  syncDelay(100);
  
  _accuTaxTimeWindow = CALL(upfinityF, '_accuTaxTimeWindow')[0] / 1;
  _curcuitBreakerTime = CALL(upfinityF, '_curcuitBreakerTime')[0] / 1;
  _curcuitBreakerDuration = CALL(upfinityF, '_curcuitBreakerDuration')[0] / 1;
  _curcuitBreakerThreshold = CALL(upfinityF, '_curcuitBreakerThreshold')[0] / 1;
  _taxAccuTaxCheckGlobal = CALL(upfinityF, '_taxAccuTaxCheckGlobal')[0] / 1;
  _curcuitBreakerFlag = CALL(upfinityF, '_curcuitBreakerFlag')[0] / 1;
  
  syncDelay(100);
  
  _accuTaxTimeWindow = (await upfinityC.functions._accuTaxTimeWindow())[0] / 1;
  _airdropSystem = (await upfinityC.functions._airdropSystem())[0] / 1;
  _antiDumpDuration = (await upfinityC.functions._antiDumpDuration())[0] / 1;
  _autoBurnFee = (await upfinityC.functions._autoBurnFee())[0] / 1;
  _buySellTimeDuration = (await upfinityC.functions._buySellTimeDuration())[0] / 1;
  _curcuitBreakerDuration = (await upfinityC.functions._curcuitBreakerDuration())[0] / 1;
  _curcuitBreakerThreshold = (await upfinityC.functions._curcuitBreakerThreshold())[0] / 1;
  _dipRewardFee = (await upfinityC.functions._dipRewardFee())[0] / 1;
  _dividendPartyThreshold = (await upfinityC.functions._dividendPartyThreshold())[0]; // big number
  _freeAirdropSystem = (await upfinityC.functions._freeAirdropSystem())[0] / 1;
  _improvedRewardFee = (await upfinityC.functions._improvedRewardFee())[0] / 1;
  
  syncDelay(100);
  
  _liquidityFee = (await upfinityC.functions._liquidityFee())[0] / 1;
  _manualBuyFee = (await upfinityC.functions._manualBuyFee())[0] / 1;
  _maxBalanceNume = (await upfinityC.functions._maxBalanceNume())[0] / 1;
  _maxSellNume = (await upfinityC.functions._maxSellNume())[0] / 1;
  _maxTxNume = (await upfinityC.functions._maxTxNume())[0] / 1;
  _minusTaxBonus = (await upfinityC.functions._minusTaxBonus())[0] / 1;
  _taxAccuTaxThreshold = (await upfinityC.functions._taxAccuTaxThreshold())[0] / 1;
  _timeAccuTaxCheckGlobal = (await upfinityC.functions._timeAccuTaxCheckGlobal())[0] / 1;
  _whaleRate = (await upfinityC.functions._whaleRate())[0] / 1;
  _whaleSellFee = (await upfinityC.functions._whaleSellFee())[0] / 1;
  _whaleTransferFee = (await upfinityC.functions._whaleTransferFee())[0] / 1;
  
  syncDelay(100);
  
  _antiDumpTimer = (await upfinityC.functions._antiDumpTimer())[0] / 1;
  
  buyFee = 900;
  displayText("buyFee", buyFee / 100);
  sellFee = 1200;
  displayText("sellFee", sellFee / 100);
  totalFee = buyFee + sellFee;
  displayText("totalFee", totalFee / 100);
  
  priceRecoveryFee = sellFee - _manualBuyFee;
  displayText("priceRecoveryFee", priceRecoveryFee / 100);
  
  multiplier = 1 + buyFee / (priceRecoveryFee - _autoBurnFee);
  
  displayText("_accuMulFactor", _accuMulFactor);
  displayText("_accuTaxTimeWindow", _accuTaxTimeWindow / 60 / 60 / 24);
  displayText("_airdropSystem", _airdropSystem);
  displayText("_antiDumpDuration", _antiDumpDuration);
  displayText("_autoBurnFee", _autoBurnFee / 100); // not multiplied
  displayText("_buySellTimeDuration", _buySellTimeDuration);
  displayText("_curcuitBreakerDuration", _curcuitBreakerDuration / 60 / 60);
  displayText("_curcuitBreakerThreshold", _curcuitBreakerThreshold / 100);
  displayText("_dipRewardFee", _dipRewardFee * multiplier / 100);
  displayText("_dividendPartyThreshold", numberWithCommas(_dividendPartyThreshold / 1e18));
  displayText("_freeAirdropSystem", _freeAirdropSystem);
  displayText("_improvedRewardFee", _improvedRewardFee * multiplier / 100);
  displayText("_liquidityFee", _liquidityFee * multiplier / 100 * 2); // double
  displayText("_manualBuyFee", _manualBuyFee / 100); // not multiplied
  displayText("_maxBalanceNume", _maxBalanceNume / 100);
  displayText("_maxSellNume", _maxSellNume / 100 / 2); // half
  displayText("_maxTxNume", _maxTxNume / 100);
  displayText("_minusTaxBonus", _minusTaxBonus / 100);
  <!-- displayText("_rewardToken", (await upfinityC.functions._rewardToken())[0] / 100); -->
  displayText("_taxAccuTaxThreshold", _taxAccuTaxThreshold / 100 * 2); // double
  displayText("_timeAccuTaxCheckGlobal", _timeAccuTaxCheckGlobal / 60 / 60 / 24);
  displayText("_whaleRate", _whaleRate / 10000);
  displayText("_whaleSellFee", _whaleSellFee / 10000);
  displayText("_whaleTransferFee", _whaleTransferFee / 10000);
  
  _projectFundFee = (await upfinityC.functions._projectFundFee())[0] / 1;
  

  redistributionFee
    = (priceRecoveryFee - _autoBurnFee) - (10000 - priceRecoveryFee) * 0 / 100 - (_liquidityFee + _projectFundFee + _improvedRewardFee + _dipRewardFee) - _liquidityFee;
  displayText("redistributionFee", redistributionFee * multiplier / 100);
  
  reserveData = await pairC.functions.getReserves();
  
  if (wbnbAdr < upfinityAdr) { // BNB / UpFinity
    rI = reserveData[0]; 
    rO = reserveData[1];
  } else {
    rI = reserveData[1];
    rO = reserveData[0];
  }
  
  totalLpSupply = (await pairC.functions.totalSupply())[0];
  
  maxBuyUPF = rO.mul(_maxTxNume).div(10000); // 10% of current liquidity
  maxBuyBNB = (await routerC.functions.getAmountIn(maxBuyUPF, rI, rO))[0];
  

  sellCooltime = 0;
  if (_curcuitBreakerFlag == 2) { // breaker on?
    sellCooltime_ = _curcuitBreakerTime / 1 + _curcuitBreakerDuration / 1 + 0.5 * 60 * 60; // reliable rough estimation
    if (Date.now() < sellCooltime_) {
      if (sellCooltime / 1 < sellCooltime_ / 1) {
        sellCooltime = sellCooltime_;
        d = new Date(sellCooltime * 1000);
        displayText("sellCooltime", d);
      }
    }
  }
  
  sellCooltime_ = _antiDumpTimer / 1 + _antiDumpDuration / 1;
  if (Date.now() < sellCooltime_) {
    sellCooltime = sellCooltime_;
    d = new Date(sellCooltime * 1000);
    displayText("sellCooltime", d);
  }
  
  syncDelay(100);
  
  communityToken = "0x000000000000000000000000000000000000dEaD";
  
  // airdrop
  freeAirdropBalance = (await upfinityC.functions.balanceOf(freeAirdropAdr))[0];
  dollarsPerBNB = (await airdropC.functions._dollarsPerBNB())[0] / 1;
  oneDollarBNB = 1 / dollarsPerBNB; // 1 BNB = 400$ for simplicity + optimize gas fee
  oneDollarUPF = (await routerC.functions.getAmountOut(ethers.utils.parseEther(oneDollarBNB.toString()), rI, rO))[0];
  _freeAirdropSystem = (await upfinityC.functions._freeAirdropSystem())[0]
  displayText("freeAirdropBalance", "Free Airdrop (" + _freeAirdropSystem + ") balance: [" + numberWithCommas(Math.floor(freeAirdropBalance.div(oneDollarUPF) / 1)) + " $]");
  
  airdropBalance = (await upfinityC.functions.balanceOf(airdropAdr))[0];
  _airdropSystem = (await upfinityC.functions._airdropSystem())[0]
  displayText("airdropBalance", "Airdrop (" + _airdropSystem + ") balance: [" + numberWithCommas(Math.floor(airdropBalance.div(oneDollarUPF) / 1)) + "$]");
  
  
  balanceInfo = await provider.getBalance(rewardAdr);
  balance = BNB(ethers.utils.formatEther(balanceInfo) * bnbDiv);
  displayText("totalUnclaimed", balance.toString() + ' BNB');
  
  burnAdr = "0x000000000000000000000000000000000000dEaD";
  burnAmount = (await upfinityC.functions.balanceOf(burnAdr))[0];
  burnPercentage = burnAmount.mul(100).div(totalSupply);
  burnPercentage = burnPercentage.sub(50); // 50% burn at the start
  displayText("_manualburned", round(burnPercentage / 1, 1));
  burnLpAmount = (await pairC.functions.balanceOf(burnAdr))[0];
  burnLpPercentage = burnLpAmount.mul(100).div(totalLpSupply);
  displayText("_manuallpburned", round(burnLpPercentage / 1, 1));
  
  bnbAmount = rI / bnbDiv;
  tokenAmount = rO / bnbDiv;
  
  
  // without wallet connection
  busdAdr = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  pricePairAdr = (await factoryC.functions.getPair(wbnbAdr, busdAdr))[0];
  pricePairC = new ethers.Contract(pricePairAdr, pairAbi, provider);
  priceReserveData = await pricePairC.functions.getReserves();
  
  if (wbnbAdr < busdAdr) { // BNB / busd
    pricerI = priceReserveData[0]; 
    pricerO = priceReserveData[1];
  } else {
    pricerI = priceReserveData[1];
    pricerO = priceReserveData[0];
  }
  
  price = rI / rO * pricerO / pricerI; // TODO: WBNB-BUSD, same decimal
  realSupply = totalSupply.sub(burnAmount);
  mcap = price * realSupply / bnbDiv;
  
  var elms_ = document.querySelectorAll("[id='priceCounter']");
  if (elms_.length) {
  elms_[0].setAttribute('data-purecounter-end', (price / 1).toFixed(10));
  }
  var elms_ = document.querySelectorAll("[id='burnCounter']");
  if (elms_.length) {
  elms_[0].setAttribute('data-purecounter-end', burnAmount / bnbDiv);
  }
  var elms_ = document.querySelectorAll("[id='circulateCounter']");
  if (elms_.length) {
  elms_[0].setAttribute('data-purecounter-end', realSupply / bnbDiv);
  }
  var elms_ = document.querySelectorAll("[id='marketcapCounter']");
  if (elms_.length) {
  elms_[0].setAttribute('data-purecounter-end', mcap.toFixed(0));
  }
  var elms_ = document.querySelectorAll("[id='manualBurnCounter']");
  if (elms_.length) {
  elms_[0].setAttribute('data-purecounter-end', burnPercentage);
  }
  var elms_ = document.querySelectorAll("[id='manualLPBurnCounter']");
  if (elms_.length) {
  elms_[0].setAttribute('data-purecounter-end', burnLpPercentage);
  }
  var elms_ = document.querySelectorAll("[id='startMultiCounter']");
  if (elms_.length) {
  elms_[0].setAttribute('data-purecounter-end', mcap.toFixed(0) / 333);
  }
  
  upfinityBalance = (await upfinityC.functions.balanceOf(upfinityAdr))[0];
  partyImpact = 0;
  if (_dividendPartyThreshold * 0.9 < upfinityBalance / 1) {
    displayText("dividendPartyStatus", "READY");
    partyImpact = _dividendPartyThreshold.div(rO) * 100; // roughly
    displayText("dividendPartyImpactMin", (partyImpact * 1).toFixed(1));
    displayText("dividendPartyImpactMax", (partyImpact * 2).toFixed(1));
  } else {
    displayText("dividendPartyStatus", "OFF");
  }
  
  
  
  // personal wallet infos
  syncDelay(100);
  
  currentAccount = await afconnect();
  
  balanceUPF = (await upfinityC.functions.balanceOf(currentAccount))[0];
  displayText("balanceStatus", numberWithCommas(Math.floor(balanceUPF / 1e18)));
  
  balancePercentage = round(balanceUPF / totalSupply * 100, 2);
  displayText("balancePercentageStatus", '(' + balancePercentage.toString() + ' %)');
  if (balancePercentage >= 1) {
    displayText("balanceIcon", String.fromCodePoint(0x1F40B)); // 🐳
  } else if (balancePercentage >= 0.3) {
    displayText("balanceIcon", String.fromCodePoint(0x1F988)); // 🦈
  } else if (balancePercentage >= 0.1) {
    displayText("balanceIcon", String.fromCodePoint(0x1F42C)); // 🐬
  } else if (balancePercentage >= 0.03) {
    displayText("balanceIcon", String.fromCodePoint(0x1F41F)); // 🐟
  } else if (balancePercentage >= 0.01) {
    displayText("balanceIcon", String.fromCodePoint(0x1F419)); // 🐙
  } else if (balancePercentage >= 0.003) {
    displayText("balanceIcon", String.fromCodePoint(0x1F980)); // 🦀
  } else if (balancePercentage >= 0.001) {
    displayText("balanceIcon", String.fromCodePoint(0x1F990)); // 🦐
  } 
  
  
  
  balanceLimit = totalSupply.mul(_maxBalanceNume).div(10000); // 1.1% of total supply
  buyLimit = balanceLimit.sub(balanceUPF);
  if (buyLimit / 1 < 0) {
    displayText("oneBuyLimitStatus", 'already max!');
    buyLimit = 0;
  } else {
    maxBuyBNB_ = (await routerC.functions.getAmountIn(buyLimit, rI, rO))[0];
    if (maxBuyBNB_ / 1 < maxBuyBNB / 1) {
      maxBuyBNB = maxBuyBNB_;
    }
    
    displayText("oneBuyLimitStatus", round(maxBuyBNB / bnbDiv, 2) + ' BNB');  
  }
  
  
  
  
  // it may display last big value
  
  _buySellTimer = (await upfinityC.functions._buySellTimer(currentAccount))[0] / 1;
  sellCooltime_ = _buySellTimer + _buySellTimeDuration;
  if (sellCooltime / 1 < sellCooltime_ / 1) {
    sellCooltime = sellCooltime_;
    d = new Date(sellCooltime * 1000);
    displayText("sellCooltime", d);
  }
  
  blacklisted = (await upfinityC.functions.blacklisted(currentAccount))[0];

  cantsell = cantsellReason();
  
  if (cantsell != "") {
    displayText("circuitBreakerStatus", cantsell);
  }
  
  
  maxSellUPF = rO;  
  if (Date.now() < _timeAccuTaxCheckGlobal + _accuTaxTimeWindow) { // in time window
    maxSellRate_ = _curcuitBreakerThreshold - _taxAccuTaxCheckGlobal;
    if (maxSellRate_ / 1 < 0) {
      maxSellRate_ = 0;
    }
  } else {
    maxSellRate_ = _curcuitBreakerThreshold;
  }
  
  maxSellUPF_ = rO.mul(maxSellRate_).div(10000); // not exactly right but roughly to avoid confusion
  if (maxSellUPF_ / 1 < maxSellUPF / 1) {
    maxSellUPF = maxSellUPF_;
  }

  _timeAccuTaxCheck = (await upfinityC.functions._timeAccuTaxCheck(currentAccount))[0] / 1;
  _taxAccuTaxCheck = (await upfinityC.functions._taxAccuTaxCheck(currentAccount))[0] / 1;
  if (Date.now() < _timeAccuTaxCheck + _accuTaxTimeWindow) { // in time window
    maxSellRate_ = _taxAccuTaxThreshold - _taxAccuTaxCheck; // reverted if exceed limit, so always little value left
    if (maxSellRate_ / 1 < 0) {
      maxSellRate_ = 0;
    }
  } else {
    maxSellRate_ = _taxAccuTaxThreshold;
  }
  
  maxSellUPF_ = rO.mul(maxSellRate_).div(10000);
  if (maxSellUPF_ / 1 < maxSellUPF / 1) {
    maxSellUPF = maxSellUPF_;
  }
  
  if (0 < maxSellUPF / 1) {
    // maxSellBNB = (await routerC.functions.getAmountIn(maxSellUPF, rI, rO))[0];
    maxSellBNB = maxSellUPF / rO * rI; // workaround 
    maxSellBNB = maxSellBNB / 1.5; // roughly estimated
  } else {
    maxSellBNB = 0;
  }

  displayText("oneSellLimitStatus", round(maxSellBNB / bnbDiv, 2) + ' BNB');

  taxPenalty = 0;
  if (Date.now() < _timeAccuTaxCheck + _accuTaxTimeWindow) { // in time window
    taxPenalty = _taxAccuTaxCheck * _accuMulFactor / 100;
    if (15 < taxPenalty / 1) {
      taxPenalty = 15; // check
    }
  }
  displayText("yourTaxPenalty", taxPenalty);


  // price impact 1 / ( 1 + x / r0) = (1 - I)
  // smart contract, change x,r0 equation to 1 / (1 + x / r0) for exact result 
  // x / r0 = a => price diff = 1 / (1 + a)^2
  // for simplicity + safety, a = 0.08, 0.05

  // for user: price impact based limit
  // for graph: price change based limit
  // so need price impact - price change relation
  // price impact accumulation => user limit
  // price change accumulation => global limit
  // x / r0 = a => price change = 1 / (1 + a)^2
  
  





  base = 20;
  margin = 3;
  whaleTax = 0;
  impact = getImpact(tokenAmount, 10**7);
  if (10**7 / tokenAmount * 100 > 1) {
    whaleTax = 4;
  } else {
    whaleTax = 0;
  }
  displayText("10mSlippage", round(base + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
  impact = getImpact(tokenAmount, 10**8);
  if (10**8 / tokenAmount * 100 > 1) {
    whaleTax = 4;
  } else {
    whaleTax = 0;
  }
  displayText("100mSlippage", round(base + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
  impact = getImpact(tokenAmount, 10**9);
  if (10**9 / tokenAmount * 100 > 1) {
    whaleTax = 4;
  } else {
    whaleTax = 0;
  }
  displayText("1bSlippage", round(base + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
  impact = getImpact(tokenAmount, 10**10);
  if (10**10 / tokenAmount * 100 > 1) {
    whaleTax = 4;
  } else {
    whaleTax = 0;
  }
  displayText("10bSlippage", round(base + impact * _accuMulFactor + taxPenalty + partyImpact + whaleTax + margin, 1));
  
  displayText("devNotice", "<p>If numbers not showing correctly, it means dev is upgrading :)</p><p>IF having trouble for anything, DM @ALLCOINLAB</p><p>All value can be changed or different due to network status!</p>");
  
  
  id2Names = {
    0: 'emeraldBoy',
    1: 'emeraldGirl',
    2: 'diamondBoy',
    3: 'diamondGirl',
  }
  
  var name2Ids = {};
  for(var id in id2Names)
  {
      var num = id2Names[id];
      name2Ids[num] = id;
  }
  
  totalNFTCount = 0;
  grades = ['diamond', 'emerald'];
  genders = ['Boy', 'Girl'];
  for (grade of grades) {
    for (gender of genders) {
      var elms_ = document.querySelectorAll("[id='" + grade + gender + "']");
      if (elms_.length) {
        // jsonFile = JSON.parse(loadFile("assets/" + String(name2Ids[grade + gender]) + ".json"))
        for (var idx = 0; idx < elms_.length; idx++) {
          // elms_[idx].setAttribute('src', jsonFile['image']);
          if (grade == 'diamond') {
            elms_[idx].setAttribute('src', 'assets/img/nft/origins/' + gender.toLowerCase() + '.png');
          } else if (grade == 'emerald') {
            elms_[idx].setAttribute('src', 'assets/img/nft/origins/' + gender.toLowerCase() + '.gif');
          }
        }
      }
      
      diamondBoyCount = (await nftC.functions._totalItemCount(name2Ids[grade + gender]))[0] / 1 + 10;
      displayText_(grade + gender + "Count", diamondBoyCount);
      totalNFTCount += diamondBoyCount;
    }
  }
  
  displayText_("totalNFTCount", totalNFTCount);
  totalSupplyNFT = (await nftC.functions.totalSupply())[0] / 1;
  console.log(totalSupplyNFT);
  
  source = getElement('swapInput');
  if (source) {
    source.addEventListener('input', inputHandlerBuy);
    source.addEventListener('propertychange', inputHandlerBuy); // for IE8
    // Firefox/Edge18-/IE9+ don’t fire on <select><option>
    // source.addEventListener('change', inputHandler); 
  }
  
  balanceBNB = await provider.getBalance(currentAccount);
  displayText_("BNBbalance", round(balanceBNB / bnbDiv, 3));

  balanceUPF = (await upfinityC.functions.balanceOf(currentAccount))[0];
  displayText_("UPFbalance", numberWithCommas(parseInt(balanceUPF / bnbDiv)));
  balance = balanceUPF;
  
  swapComma("swapInput", false);
  swapComma("swapOuput", true);
  
  myNFTs = getElement("myNFTs");
  if (myNFTs) {
    myNFTcounts = (await nftC.functions.balanceOf(currentAccount))[0] / 1;
    for (idx = 0; idx < myNFTcounts; idx++) {
      myNFTidx = (await nftC.functions.tokenOfOwnerByIndex(currentAccount, idx))[0] / 1;
      myNFTitemIdx = (await nftC.functions._itemById(myNFTidx))[0] / 1;
      myNFTimgSrc = JSON.parse(loadFile("assets/" + String(myNFTitemIdx) + '.json'))['image'];
      myNFTimgName = JSON.parse(loadFile("assets/" + String(myNFTitemIdx) + '.json'))['name'];
      if (myNFTitemIdx == 0) {
        myNFTimgSrc = "boy.gif";
        myNFTborder = "emerald";
      }
      if (myNFTitemIdx == 1) {
        myNFTimgSrc = "girl.gif";
        myNFTborder = "emerald";
      }
      if (myNFTitemIdx == 2) {
        myNFTimgSrc = "boy.png";
        myNFTborder = "diamond";
      }
      if (myNFTitemIdx == 3) {
        myNFTimgSrc = "girl.png";
        myNFTborder = "diamond";
      }
      output = `
        <div class="col-12 col-lg-3 text-justify content">
          <div style="width: 100%; position: relative;">
            <img src="assets/img/nft/origins/${myNFTimgSrc}" style="top:0; left: 0; padding: 20px; height: auto;">
            <img src="assets/img/nft/origins/${myNFTborder}.png" style="position: absolute; top:0; left: 0;">
          </div>
          <p>ID: ${myNFTidx}</p>
          <p>${myNFTimgName}</p>
          
        </div>
      `;
      myNFTs.innerHTML += output;
    }
    displayText_("totalMyNFTCount", myNFTcounts);
  }
  
  chart = document.querySelector('#SellTaxChart');
  if (chart) {
    new Chart(document.querySelector('#SellTaxChart'), {
    type: 'doughnut',
    data: {
      labels: [
      'Manual Buy: ' + String(_manualBuyFee / 100) + '%',
      'Rewards: ' + String((_dipRewardFee + _improvedRewardFee) / 100) + '%',
      'Liquidity: ' + String(_liquidityFee / 100) + '%',
      'Project: ' + String(_projectFundFee / 100) + '%',
      'Ecosystem: ' + String(_projectFundFee / 100) + '%',
      'Burn + Redist + etc: ' + String((_autoBurnFee + redistributionFee) / 100) + '%',
      ],
      datasets: [{
      label: 'Sell Tax',
      data: [_manualBuyFee / 100, (_dipRewardFee + _improvedRewardFee) / 100, _liquidityFee / 100, _projectFundFee / 100, _projectFundFee / 100, (_autoBurnFee + redistributionFee) / 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(40, 167, 69)',
        'rgb(162, 74, 96)',
        'rgb(234, 72, 23)',				  
      ],
      hoverOffset: 4
      }],
    },
    options: {
      plugins: {
        legend: {
          <!-- position: 'chartArea' -->
          position: 'right'
        }
      }
    }
    });
  }
  
  chart = document.querySelector('#TokenDistributionChart');
  if (chart) {
    new Chart(document.querySelector('#TokenDistributionChart'), {
    type: 'doughnut',
    data: {
      labels: [
      'Burn: 50%',
      'Liquidity: 40%',
      'Minus Tax: 2%',
      'Project: 8%',
      ],
      datasets: [{
      label: 'Token Distribution',
      data: [50, 40, 2, 8],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(40, 167, 69)',
      ],
      hoverOffset: 4
      }],
    },
    options: {
      plugins: {
        legend: {
          <!-- position: 'chartArea' -->
          position: 'right'
        }
      }
    }
    });
  }
  
  
  
  const countDownTimer = function (id, date) {
    var _vDate = new Date(date); // exact date UTC
    var _second = 1000; 
    var _minute = _second * 60; 
    var _hour = _minute * 60; 
    var _day = _hour * 24; 
    var timer; 
    
    function showRemaining() { 
      var date = new Date(); 
      var now =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
       date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
      var distDt = _vDate - now; 
      if (distDt < 0) { 
        clearInterval(timer); 
        displayText_(id, 'Mint!');
        return;
      } 
      
      var days = Math.floor(distDt / _day); 
      var hours = Math.floor((distDt % _day) / _hour); 
      var minutes = Math.floor((distDt % _hour) / _minute); 
      var seconds = Math.floor((distDt % _minute) / _second); 
      //document.getElementById(id).textContent = date.toLocaleString() + "까지 : ";
      
      var elms = document.querySelectorAll("[id='" + id + "']");
      if (elms.length) {
        for (var idx = 0; idx < elms.length; idx++) {
          elms[idx].textContent = "Mint!";
          continue;
          elms[idx].textContent = days + 'd '; 
          elms[idx].textContent += hours + 'h ';
          elms[idx].textContent += minutes + 'm '; 
          elms[idx].textContent += seconds + 's';
        }
      }
      
    } 
    timer = setInterval(showRemaining, 1000); 
  } 
  
  var dateObj = new Date(); 
  
  dateObj.setDate(dateObj.getDate() + 1); 
  countDownTimer('NFTcountDown', '11/16/2021 2:59 PM'); // 내일까지 
  

  
  
  console.log('code done');
  
  }());

import React, { useState } from 'react';
import classes from './Intro.module.css';
import introRobot from '../../assets/images/Flat-Greeting.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icons from '../Icons'

function Intro() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
    }


    return (
        <div className={classes.intro}>

            <div className={classes.introDescription}>
                <h1><span className={classes.UpRiseName}>UpRise:</span> BUY, HOLD, EARN</h1>
                <p>
                    <span> THE WORLD's MOST </span>
                    <span>INNOVATIVE </span>
                    <span>TOKEN</span>
                </p>
                <p className={classes.accountNum}>SOON
                    <CopyToClipboard text={"S"}>
                        <span><button onClick={handleCopy} className={classes.buttonCopy}>{!copied ? "COPY" : "COPIED"} </button></span>
                    </CopyToClipboard>
                </p>


                <div className={classes.walletButtons}>
                    <button className={classes.walletBtn}>CONNECT WALLET</button>
                    <button className={classes.walletBtn} onClick={window.addUP}>ADD UP IN WALLET</button>
                </div>

                <p>TAX: buy 9% / sell 12%</p>
                <p>recommended slippage: buy 10+ / sell 15+</p>
                <Icons />
            </div>
            <div className={classes.introRobotImage}>
                <img src={introRobot} alt={introRobot} />
            </div>
        </div>
    )
}

export default Intro
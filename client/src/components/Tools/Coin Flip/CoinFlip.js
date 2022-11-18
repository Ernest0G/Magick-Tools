import React from 'react'
import { useState } from 'react'

import './CoinFlip.css'

const CoinFlip = () => {
    const [coinFlip, setCoinFlip] = useState(Math.round(Math.random() * (1)));
    const [showCoinFlipResult, setShowCoinFlipResult] = useState(false);
    const [showCoin, setShowCoin] = useState(true);

    const handleCoinFlip = () => {
        setCoinFlip(Math.round(Math.random() * (1)));
        setShowCoin(false);
        setShowCoinFlipResult(true);
        setTimeout(() => {
            setShowCoinFlipResult(false);
            setShowCoin(true);
        }, 1600);

    }

    return (
        <div className='coin__flip-container'>
            {showCoin === true ? <img onClick={handleCoinFlip} src={require('../../../assets/images/flip-coin.png')} /> :
                (showCoinFlipResult && (coinFlip === 1 ? <h2 className='coin__flip-animation' >Heads</h2> : <h2 className='coin__flip-animation'>Tails</h2>))
            }

            <div className='coin__flip-result' >


            </div>
        </div>
    )
}

export default CoinFlip
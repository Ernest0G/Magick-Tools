import React from 'react'
import { useState } from 'react'

import './Home.css'
import { Card, DiceRoll, Modal, CoinFlip, RandNumber, LifeCounterOptions, Calculator, Notes, CardLookup } from '../components/index'

const Home = () => {
    const [openDiceModal, setOpenDiceModal] = useState(false);
    const [openCoinModal, setOpenCoinModal] = useState(false);
    const [openRandNumberModal, setOpenRandNumberModal] = useState(false);
    const [openCardLookupModal, setOpenCardLookupModal] = useState(false);
    const [openNotesModal, setOpenNotesModal] = useState(false);
    const [openCalcModal, setOpenCalcModal] = useState(false);
    const [openLifeOptions, setOpenLifeOptions] = useState(false);
    const [lifeTotal, setLifeTotal] = useState(40);

    const handleLifeChange = (value) => {
        setLifeTotal(lifeTotal + value);
    };

    return (
        <div className='home-container__main'>
            {openDiceModal && <Modal closeModal={setOpenDiceModal} title='Roll Dice' description='Tap or Click On a Dice to Roll It' body={<DiceRoll />} />}
            {openCoinModal && <Modal closeModal={setOpenCoinModal} title='Flip A Coin' description='Tap or Click the Coin to Flip It' body={<CoinFlip />} />}
            {openRandNumberModal && <Modal closeModal={setOpenRandNumberModal} title='Random Number' description='Enter the minimum and maximum for the range of numbers to randomize' body={<RandNumber />} />}
            {openCardLookupModal && <Modal closeModal={setOpenCardLookupModal} title='Card Lookup' description=' ' body={<CardLookup />} />}
            {openCalcModal && <Modal closeModal={setOpenCalcModal} title='Calculator' description=' ' body={<Calculator />} />}
            {openNotesModal && <Modal closeModal={setOpenNotesModal} title='Notes' description=' ' body={<Notes />} />}
            {openLifeOptions && <Modal setLife={setLifeTotal} closeModal={setOpenLifeOptions} title='Life Counter Options' body={<LifeCounterOptions />} />}


            <div className='home-container-slide'>
                <div className='home-container__tools'>
                    <div onClick={() => { setOpenDiceModal(true) }}>
                        <Card toolName='Roll Dice' image={require('../assets/images/roll-dice.png')} />
                    </div>
                    <div onClick={() => { setOpenCoinModal(true) }}>
                        <Card toolName='Flip Coin' image={require('../assets/images/flip-coin.png')} />
                    </div>
                    <div onClick={() => { setOpenRandNumberModal(true) }}>
                        <Card toolName='Random Number' image={require('../assets/images/rand-num.png')} />
                    </div>
                    <div onClick={() => { setOpenCardLookupModal(true) }}>
                        <Card toolName='Card Lookup' image={require('../assets/images/card-lookup.png')} />
                    </div>
                    <div onClick={() => { setOpenCalcModal(true) }}>
                        <Card toolName='Calculator' image={require('../assets/images/calc.png')} />
                    </div>
                    <div onClick={() => { setOpenNotesModal(true) }}>
                        <Card toolName='Notes' image={require('../assets/images/notes.png')} />
                    </div>
                </div>
            </div>
            <div className='home-container__life-counter'>
                <div className="home-life-counter__main">
                    <div className="home-life-counter__left">
                        <h3 onClick={() => handleLifeChange(-10)}>-10</h3>
                        <h3 onClick={() => handleLifeChange(-5)}>-5</h3>
                        <h3 onClick={() => handleLifeChange(-1)}>-1</h3>
                    </div>
                    <div className="home-life-counter__middle">
                        <h1 id="home-life-counter__life-total">{lifeTotal}</h1>
                        <button id="home-life-counter__life-options" onClick={() => setOpenLifeOptions(true)}> Options</button>
                    </div>
                    <div className="home-life-counter__right">
                        <h3 onClick={() => handleLifeChange(10)}>+10</h3>
                        <h3 onClick={() => handleLifeChange(5)}>+5</h3>
                        <h3 onClick={() => handleLifeChange(1)}>+1</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
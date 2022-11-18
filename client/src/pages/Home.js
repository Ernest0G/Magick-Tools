import React from 'react'
import { useState } from 'react'

import './Home.css'
import { Card, DiceRoll, Modal, CoinFlip, RandNumber, LifeCounter, Calculator, Notes, CardLookup } from '../components/index'

const Home = () => {
    const [openDiceModal, setOpenDiceModal] = useState(false);
    const [openCoinModal, setOpenCoinModal] = useState(false);
    const [openRandNumberModal, setOpenRandNumberModal] = useState(false);
    const [openCardLookupModal, setOpenCardLookupModal] = useState(false);
    const [openNotesModal, setOpenNotesModal] = useState(false);
    const [openCalcModal, setOpenCalcModal] = useState(false);
    const [openLifeOptions, setOpenLifeOptions] = useState(false);

    return (
        <div className='home-container__main'>
            {openDiceModal && <Modal closeModal={setOpenDiceModal} title='Roll Dice' description='Tap or Click On a Dice to Roll It' body={<DiceRoll />} />}
            {openCoinModal && <Modal closeModal={setOpenCoinModal} title='Flip A Coin' description='Tap or Click the Coin to Flip It' body={<CoinFlip />} />}
            {openRandNumberModal && <Modal closeModal={setOpenRandNumberModal} title='Random Number' description='Enter the minimum and maximum for the range of numbers to randomize' body={<RandNumber />} />}
            {openCardLookupModal && <Modal closeModal={setOpenCardLookupModal} title='Card Lookup' description=' ' body={<CardLookup />} />}
            {openCalcModal && <Modal closeModal={setOpenCalcModal} title='Calculator' description=' ' body={<Calculator />} />}
            {openNotesModal && <Modal closeModal={setOpenNotesModal} title='Notes' description=' ' body={<Notes />} />}
            {openLifeOptions && <Modal closeModal={setOpenLifeOptions} title='Life Counter Options' body={<LifeCounter />} />}


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
            <h4>LIFE COUNTER</h4>
            <div className='home-container__life-counter'>
                <button className='home-button__life-change' id='minus-10-button'>-10</button>
                <button className='home-button__life-change' id='minus-5-button'>-5</button>
                <button className='home-button__life-change' id='minus-1-button'>-1</button>
                <button className='home-button__life-change' id='home-button__total-life' onClick={() => { setOpenLifeOptions(true) }}>40</button>
                <button className='home-button__life-change' id='plus-1-button'>+1</button>
                <button className='home-button__life-change' id='plus-5-button'>+5</button>
                <button className='home-button__life-change' id='plus-10-button'>+10</button>
            </div>

        </div>
    )
}

export default Home
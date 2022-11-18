import React from 'react'
import { useState } from 'react'

import { default as DiceRollCard } from './DiceRollCard.js'
import './DiceRoll.css'


const DiceRoll = () => {
    const [d4Value, setD4Value] = useState(Math.ceil(Math.random() * (4)));
    const [d6Value, setD6Value] = useState(Math.ceil(Math.random() * (6)));
    const [d8Value, setD8Value] = useState(Math.ceil(Math.random() * (8)));
    const [d10Value, setD10Value] = useState(Math.ceil(Math.random() * (10)));
    const [d12Value, setD12Value] = useState(Math.ceil(Math.random() * (12)));
    const [d20Value, setD20Value] = useState(Math.ceil(Math.random() * (20)));

    const [showD4Value, setShowD4Value] = useState(false);
    const [showD6Value, setShowD6Value] = useState(false);
    const [showD8Value, setShowD8Value] = useState(false);
    const [showD10Value, setShowD10Value] = useState(false);
    const [showD12Value, setShowD12Value] = useState(false);
    const [showD20Value, setShowD20Value] = useState(false);

    return (
        <div className='dice__roll-container'>
            <div className='dice__roll-slide'>
                <div className='dice__roll-grid'>
                    {/*D4 Logic */}
                    <div onClick={() => {
                        setD4Value(Math.ceil(Math.random() * (4)));
                        setShowD4Value(true);
                        setTimeout(() => {
                            setShowD4Value(false);
                        }, 1600);
                    }}>
                        {showD4Value ? <DiceRollCard title='D4' onClick={() => {
                            setD4Value(Math.ceil(Math.random() * (4)));
                            setShowD4Value(true);

                        }}
                            value={d4Value} /> : <DiceRollCard title='D4' image={require('../../../assets/images/d4.png')} />}
                    </div>

                    {/*D6 Logic */}
                    <div onClick={() => {
                        setD6Value(Math.ceil(Math.random() * (6)));
                        setShowD6Value(true);
                        setTimeout(() => {
                            setShowD6Value(false);
                        }, 1600);
                    }}>
                        {showD6Value ? <DiceRollCard title='D6' onClick={() => {
                            setD6Value(Math.ceil(Math.random() * (6)));
                            setShowD6Value(true);

                        }}
                            value={d6Value} /> : <DiceRollCard title='D6' image={require('../../../assets/images/d6.png')} />}
                    </div>

                    <div onClick={() => {
                        setD8Value(Math.ceil(Math.random() * (8)));
                        setShowD8Value(true);
                        setTimeout(() => {
                            setShowD8Value(false);
                        }, 1600);
                    }}>
                        {showD8Value ? <DiceRollCard title='D8' onClick={() => {
                            setD8Value(Math.ceil(Math.random() * (8)));
                            setShowD8Value(true);

                        }}
                            value={d8Value} /> : <DiceRollCard title='D8' image={require('../../../assets/images/d8.png')} />}
                    </div>

                    {/*D10 Logic */}
                    <div onClick={() => {
                        setD10Value(Math.ceil(Math.random() * (10)));
                        setShowD10Value(true);
                        setTimeout(() => {
                            setShowD10Value(false);
                        }, 1600);
                    }}>
                        {showD10Value ? <DiceRollCard title='D10' onClick={() => {
                            setD10Value(Math.ceil(Math.random() * (10)));
                            setShowD10Value(true);

                        }}
                            value={d10Value} /> : <DiceRollCard title='D10' image={require('../../../assets/images/d10.png')} />}
                    </div>

                    {/*D12 Logic */}
                    <div onClick={() => {
                        setD12Value(Math.ceil(Math.random() * (12)));
                        setShowD12Value(true);
                        setTimeout(() => {
                            setShowD12Value(false);
                        }, 1600);
                    }}>
                        {showD12Value ? <DiceRollCard title='D12' onClick={() => {
                            setD12Value(Math.ceil(Math.random() * (12)));
                            setShowD12Value(true);

                        }}
                            value={d12Value} /> : <DiceRollCard title='D12' image={require('../../../assets/images/d12.png')} />}
                    </div>

                    {/*D20 Logic */}
                    <div onClick={() => {
                        setD20Value(Math.ceil(Math.random() * (20)));
                        setShowD20Value(true);
                        setTimeout(() => {
                            setShowD20Value(false);
                        }, 1600);
                    }}>
                        {showD20Value ? <DiceRollCard title='D20' onClick={() => {
                            setD20Value(Math.ceil(Math.random() * (20)));
                            setShowD20Value(true);

                        }}
                            value={d20Value} /> : <DiceRollCard title='D20' image={require('../../../assets/images/d20.png')} />}
                    </div>

                </div>
            </div>

            <div className='dice__roll-footer'>

            </div>
        </div>
    )
}

export default DiceRoll
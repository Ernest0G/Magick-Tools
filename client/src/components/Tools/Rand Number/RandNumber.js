import React from 'react'
import { useState } from 'react';

import './RandNumber.css'

const RandNumber = () => {
    const [randNumberMin, setRandNumberMin] = useState(0);
    const [randNumberMax, setRandNumberMax] = useState(0);
    const [randNumberResult, setRandNumberResult] = useState(0);
    const [randNumberError, setRandNumberError] = useState('');

    const handleMinChange = (event) => {
        setRandNumberMin(event.target.value);
    }

    const handleMaxChange = (event) => {
        setRandNumberMax(event.target.value);
    }

    const handleRandNumberResult = () => {
        if (randNumberMin > randNumberMax) {
            console.log(randNumberMin);
            console.log(randNumberMax);
            setRandNumberError('Your minimum is greater than the maximum, please make sure the minimum is less than the maximum range.')
        }
        else if (randNumberMin === randNumberMax) {

            setRandNumberError('Make sure you have different values for the minimum and maximum.')
        }
        else if (randNumberMin < 0) {

            setRandNumberError('Make sure your minimum is not a negative value.')
        }
        else {
            setRandNumberResult((Math.round(Math.random() * (randNumberMax - randNumberMin)) + randNumberMin) / 10);
            setRandNumberError('');
        }
    }

    return (
        <div>
            <div className='rand__number-container'>

                <label>Min:</label>
                <input className='rand__number-input'
                    type='number'
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }

                    }}
                    onChange={handleMinChange} />


                <label>Max:</label>
                <input className='rand__number-input'
                    type='number'
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    onChange={handleMaxChange} />
                <button onClick={handleRandNumberResult}>Generate Number</button>
                <div className='rand__number-result'>
                    <label>Result:</label>
                    <h1>{randNumberResult}</h1>
                </div>

            </div>
            <div className='rand__number-error'>
                <h3>{randNumberError}</h3>
            </div>
        </div>
    )
}

export default RandNumber
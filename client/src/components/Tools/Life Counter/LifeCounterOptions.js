import React from 'react'

import { DropDown } from '../../index'
import './LifeCounterOptions.css'

const LifeCounterOptions = ({ setLife }) => {

    const formatOptions = [
        { label: "Commander/EDH", value: 40 },
        { label: "Standard", value: 20 },
        { label: "Brawl", value: 20 },
        { label: "Modern", value: 40 },
        { label: "Pioneer", value: 40 },
        { label: "Historic", value: 40 },
        { label: "Legacy", value: 40 },
        { label: "Vintage", value: 40 },
        { label: "Pauper", value: 40 },
    ]

    return (
        <div className='life-counter-options__container'>
            <label>Set Game Format</label>
            <DropDown dropDownOptions={formatOptions} selection={setLife} />

        </div>
    )
}

export default LifeCounterOptions
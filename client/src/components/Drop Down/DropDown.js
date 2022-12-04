import React from 'react'

import './DropDown.css'

const DropDown = ({ dropDownOptions, selection }) => {
    return (
        <select >
            {dropDownOptions.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}

export default DropDown
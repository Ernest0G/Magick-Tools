import React from 'react'

import './DiceRollCard.css'

const DiceRollCard = (props) => {
    return (
        <div className='dice__roll__card-card'>
            <h2>{props.title}</h2>
            {props.value ? <h1>{props.value}</h1> : <img src={props.image} />}
        </div>
    )
}

export default DiceRollCard
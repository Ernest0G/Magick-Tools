import React from 'react'

import './Card.css'

const Card = (props) => {
    return (
        <div className='card-style'>
            <img src={props.image} />
            <h2>{props.toolName}</h2>

        </div>
    )
}

export default Card
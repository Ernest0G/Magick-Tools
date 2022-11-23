import React from 'react'
import { useState, useEffect } from 'react';

import './CardLookup.css'

const CardLookup = () => {
    const [cardSearch, setCardSearch] = useState('');
    const [cardShowDetail, setCardShowDetail] = useState(false);
    const [showCardImage, setShowCardImage] = useState(false);
    const [showCardSuggestion, setShowCardSuggestion] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const [card, setCard] = useState({});
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState('');



    const searchTypingHandler = async (event) => {
        setCardSearch(event.target.value);
        /*
        await fetch(`http://localhost:5000/suggestions/${cardSearch}`, { method: 'GET' })

            .then(data => data.json())
            .then(data => setSuggestions({ data }))
            .then(setCard({
                name: data.data.name,
            }))
            .then(() => {
                if (showCardSuggestion === false) {
                    setShowCardImage(true)
                }
            })

            .then(setShowCardSuggestion(true))
            .then(console.log(suggestions)) */
    };



    const searchCardHandler = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:5000/searchcard/${cardSearch}`, { method: 'GET' })
            .then(response => response.json())
            .then(response => setCard({
                name: response.name,
                cost: response.manaCost,
                text: response.originalText,
                type: response.type,
                set: response.set,
                convertedCost: response.cmc,
                image: response.imageUrl
            }))

        if (showCardImage === true) {
            setShowCardImage(false);
        }

        setCardShowDetail(true);

    };

    const imageFlipHandler = () => {
        if (showCardImage === false) {
            setShowCardImage(true);
        }
        else {
            setShowCardImage(false);
        }

    };

    return (
        <div className='card-lookup__container'>
            <form className='card-lookup__seach-container' onSubmit={searchCardHandler}>
                <input
                    className='card-lookup__search-input'
                    value={cardSearch}
                    onChange={searchTypingHandler}
                />
                <button id='card-lookup__submit-button'>
                    Submit
                </button>
            </form>

            <div className='card-lookup__card-result' >
                {showCardImage === true ? <img alt={card.name} src={card.image} /> :
                    <div className='card-lookup__card-details'>
                        {cardShowDetail &&
                            <React.Fragment>
                                <h3>Card Name:</h3>
                                {card === null ? <h4>CARD NOT FOUND</h4> : <h4>{card.name}</h4 >}
                                <h3>Cost:</h3>
                                <h4>{card.cost}</h4>
                                <h3>Type:</h3>
                                <h4>{card.type}</h4>
                                <h3>Text:</h3>
                                <h4>{card.text}</h4>
                                <h3>Converted Mana Cost:</h3>
                                <h4>{card.convertedCost}</h4>
                                <h3>Card Set:</h3>
                                <h4>{card.set}</h4>
                            </React.Fragment>
                        }

                    </div>
                }



            </div>

            {cardShowDetail &&
                <button onClick={imageFlipHandler} id='card-lookup__image-flip'>
                    Flip
                </button>
            }

            <h4>{error}</h4>
        </div>
    )
}

export default CardLookup
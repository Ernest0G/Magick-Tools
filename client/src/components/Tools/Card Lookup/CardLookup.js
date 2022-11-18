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
    const [data, setData] = useState({});
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




    const searchCardHandler = async () => {
        await fetch(`http://localhost:5000/searchcard/${cardSearch}`, { method: 'GET' })
            .then(setShowLoading(true))
            .then(data => data.json())
            .then(data => setData({ data }))
            .then(setCard({
                name: data.data.name,
                cost: data.data.manaCost,
                text: data.data.originalText,
                type: data.data.type,
                set: data.data.set,
                convertedCost: data.data.cmc,
                image: data.data.imageUrl
            }))
            .then(() => {
                if (showCardImage === true) {
                    setShowCardImage(false)
                }
            })

            .then(setShowLoading(false))
            .then(setCardShowDetail(true))

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
            <div className='card-lookup__seach-container'>
                <input className='card-lookup__search-input' onChange={searchTypingHandler} />
                <img
                    src={
                        showLoading === true ?
                            require('../../../assets/images/card-load.png') :
                            require('../../../assets/images/card-search.png')
                    }
                    className='card-lookup__search-img'
                    onClick={searchCardHandler} />
            </div>

            <div className='card-lookup__card-result' >
                {showCardImage === true ? <img alt={card.name} src={card.image} /> :
                    <div className='card-lookup__card-details'>
                        {cardShowDetail &&
                            <React.Fragment>

                                <h3>Card Name:</h3>
                                <h4>{card.name}</h4>
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
                <img
                    src={require('../../../assets/images/img-flip.png')}
                    onClick={imageFlipHandler}
                    className='card-lookup__image-flip'
                />
            }

            <h4>{error}</h4>
        </div>
    )
}

export default CardLookup
import React, { useState } from 'react'

//Styles
import './foodcard.scss'



//toggle card expand
const expand = (e) => {
    e.preventDefault();
    console.log('expanding...', e.currentTarget)
}

const FoodCard = () => {
    //State handlers
    //state value - handling function - useState setting initial state 
    const [count, setCount] = useState(0)
    const [expanded, toggleExpand] = useState(false)
    const [reversed, toggleReversed] = useState(false)

    return (
    
            <div className={"foodCard" + (expanded ? " expand" : '') + (reversed ? " reverse" : ' ')}>
                <div className="foodCard__top-wrapper">
                    <img className="foodCard__image" src="https://picsum.photos/200"></img>
                    <div className="foodCard__info-box">
                        <p className="foodCard__info-item foodCard__info-item--name">Bananas <span>#5</span></p>
                        <p className="foodCard__info-item foodCard__info-item--who">Who</p>
                        <p className="foodCard__info-item foodCard__info-item--what">What</p>
                        <p className="foodCard__info-item foodCard__info-item--location">Location</p>
                    </div>
                </div>
                <div className="foodCard__description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus urna, faucibus nec placerat ac, semper eget leo. Cras sem massa, molestie vitae iaculis vitae, rutrum euismod leo. Vivamus faucibus libero arcu, feugiat porttitor mi luctus eget. Phasellus gravida posuere metus et euismod. Donec semper luctus tortor, eget lacinia sem.
                    </p>
                </div>
    <button onClick={(e) => toggleExpand(!expanded)} className="foodCard__button">{expanded ? 'Less' : 'More'}</button>
    <button onClick={(e) => toggleReversed(!reversed)} className="foodCard__button">{'Reverse'}</button>
    
            </div>
    
    )
}

export default FoodCard
import React from "react"

//Resources

import logo from "../images/banana-coloured.svg"
//Styles
import "./home.scss"

//Containers
import Layout from "../Containers/Layout"

//Components
import FoodCard from "../Components/FoodCard"

const Home = () => {
    return (
            <div className="home-page">
                <header className="header">
                    <div className="header__logo"></div>
                    <div className="header__nav-bar">
                        <ul className="header__nav-btns">
                            <li className="header__nav-btns--btn">
                                My Bag
                            </li>
                            <li className="header__nav-btns--btn">
                                Add Item
                            </li>
                            <li className="header__nav-btns--btn">
                                Map
                            </li>
                        </ul>
                    </div>
                </header>
                <div className="content">
                <h3 className="food-container__title">See available food near you:</h3>
                    <div className="food-container">
                        <FoodCard></FoodCard>
                        <FoodCard></FoodCard>
                        <FoodCard></FoodCard>
                        <FoodCard></FoodCard>
                        <FoodCard></FoodCard>
                    </div>
                    <div className="message-box">
                        MESSAGE BOX!
                    </div>
                </div>
                <footer></footer>
            </div>
    )
}

export default Home
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
                    <div className="food-container">
                        <h3 className="food-container__title">See available food near you</h3>

                        <FoodCard></FoodCard>
                        <FoodCard></FoodCard>
                        <FoodCard></FoodCard>
                        <FoodCard></FoodCard>
                        <FoodCard></FoodCard>
                    </div>
                    <div className="message-box">
                        <h4 className="message-box__title">Messages</h4>
                        <p className="message-box__message">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lacus pretium felis viverra venenatis. Morbi sed ex fringilla, ultrices felis at, fringilla ipsum. Etiam sit amet quam sit amet est ultricies porttitor non id sem. Sed sit amet ligula ut libero cursus pellentesque. Donec dapibus quam quis ligula accumsan auctor. Phasellus pulvinar dictum maximus. Mauris et dolor condimentum, semper dui vel, efficitur odio.
                        </p>
                        <p className="message-box__message">
                            Mauris tincidunt rhoncus congue. Proin volutpat diam orci, vel faucibus est volutpat in. Phasellus feugiat sed felis non hendrerit. In pretium velit ac scelerisque eleifend. Sed ut lectus nec neque dignissim facilisis. Nulla ut risus odio. Donec ac nisl quis urna eleifend imperdiet ac et elit. Vestibulum tristique urna vel nulla egestas accumsan.
                        </p>
                    </div>
                </div>
                <footer></footer>
            </div>
    )
}

export default Home
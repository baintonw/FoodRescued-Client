import React from "react"

//Resources

import logo from "../resources/images/banana-coloured.svg"
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
                                Map
                            </li>
                            <li className="header__nav-btns--btn">
                                Find
                            </li>
                            <li className="header__nav-btns--btn">
                                Give
                            </li>
                            <li className="header__nav-btns--btn">
                                History
                            </li>
                        </ul>
                    </div>
                </header>
                <div className="content">
                    
                </div>
                <footer></footer>
            </div>
    )
}

export default Home
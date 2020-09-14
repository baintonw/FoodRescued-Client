import React from "react"

//Resources

import logo from "../images/banana-coloured.svg"
//Styles
import "./home.scss"

//Containers
import Layout from "../Containers/Layout"

const Home = () => {
    return (
            <div className="home-page">
                <header className="header">
                    <div className="logo" style={{
                        backgroundImage: `url(${logo})`,
                        backgroundRepeat: `no-repeat`,

                        width: `20rem`,
                        height: `20rem`,
                    }}>
                    </div>
                    <div className="nav-bar">
                        <ul className="nav-bar__list">
                            <li className="nav-bar__list--item">
                                My Bag
                            </li>
                            <li className="nav-bar__list--item">
                                Add Food
                            </li>
                            <li className="nav-bar__list--item">
                                History
                            </li>
                        </ul>
                    </div>
                </header>   
                <div className="home-content">
                    <div className="food-container">food-container</div>
                    <div className="message-box">Messages</div>
                </div>
            </div>
    )
}

export default Home
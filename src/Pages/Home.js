import React from "react";

import { Link } from "react-router-dom";

//Resources

import logo from "../resources/images/banana-coloured.svg";
//Styles
import "./home.scss";

//Containers
import Layout from "../Containers/Layout";

//Components
import FoodCard from "../Components/FoodCard";
import Map from "../Components/GoogleMap";

const Home = (props) => {
    const handleLogout = () => {
        fetch('http://localhost:3000/api/v1/logout', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.errors) {
                alert(response.errors)
            } else {
                props.clearUser()
            }
        })
    }

    const renderLoginOrLogout = props.currentUser && props.currentUser.logged_in 
                                ?
                                <Link to="/home" onClick={handleLogout}>
                                    Logout {props.currentUser.user.username}
                                </Link>
                                :
                                <Link to="/signin">Sign Up/Login</Link>

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
                        <li>
                            {renderLoginOrLogout}
                        </li>
                    </ul>
                </div>
            </header>

            <div className="home-page">
                <Layout>
                    <div className="content-wrapper">
                        {/* <h2>Find food in your area: </h2> */}
                        <div className="map-container">
                            <Map>
                            </Map>
                        </div>
                    </div>
                    {/* <hr></hr> */}
                    
                </Layout>

            </div>
            <footer></footer>
        </div>
    )
}

export default Home
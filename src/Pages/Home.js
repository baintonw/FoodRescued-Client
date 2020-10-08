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

const Home = () => {
    return (
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
    )
}

export default Home
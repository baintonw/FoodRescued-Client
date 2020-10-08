import React from "react";

import { Link } from "react-router-dom";

//Styles
import "./header.scss"

const Header = () => {
    return(
        <header className="header">
            <div className="header__title">Food Rescued</div>
            {/* <div className="header__logo"></div> */}
            <div className="header__nav-bar">
                <ul className="header__nav-btns">
                    <Link to="/" style={{ textDecoration: `none`,}}>
                        <li className="header__nav-btns--btn">
                            Map
                        </li>
                    </Link>
                    <Link to="/find" style={{ textDecoration: `none`,}}>
                        <li className="header__nav-btns--btn">
                            Find
                        </li>
                    </Link>
                    <Link to="/give" style={{ textDecoration: `none`,}}>
                        <li className="header__nav-btns--btn">
                            Give
                        </li>
                    </Link>
                        <li className="header__nav-btns--btn">
                            History
                        </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
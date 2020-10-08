import React from "react"

//Components
import Header from "../Layout/Header.js"

const Layout = (props) => {
    return (
        <div className="layout">
            <Header></Header>
            {props.children}
            <footer></footer>
        </div>
    )
}

export default Layout
import React, { Component } from "react";

import "../cssStuff/background.scss"
import "./style.css"
import "../cssStuff/crawl.css"
import Nav from "../nav/nav";

export default class burger extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <Nav />
                    <div className="menu-container">
                        This is where my other stuff should be ...
                    </div>
                </div>
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
            </>
        )
    }
}
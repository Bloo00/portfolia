import React, { Component } from "react";

import "../cssStuff/background.scss"
import "./style.css"

import Nav from "../nav/nav";

export default class burger extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <nav />

                </div>
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
            </>
        )
    }
}
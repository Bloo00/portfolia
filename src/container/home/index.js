import React, { Component } from "react";

import "./style.scss";
import "../cssStuff/body.scss"
import "../cssStuff/background.scss"

import Nav from "../nav/nav";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <Nav />
                    <div className="word-container">
                        <div className="hello">hello from,</div>
                        <div className="name">KABIN YANG</div>
                        <div className="desc">A web developer/designer from Southern Califonia. Working on createing cute and unique websites for all too see. Most importantly trying to become a ... </div>
                        <div className="italic-boom">Coder Extraordinaire!</div>
                    </div>
                </div>

                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>

                
            </>
        )
    }
}
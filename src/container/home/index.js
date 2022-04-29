import React, { Component } from "react";

import "./index.scss";
import "../cssStuff/body.scss"
import "../cssStuff/background.scss"

import Nav from "../nav/nav";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="nav-wrapper">
                        <div className="my-name-wrapper"><div id="name">Kabin Yang</div></div>
                        <button className="moon"></button>
                        <div className="contact-burger-holder">

                            <a className="contact" href="/contact">
                                <div classname="envelope">
                                    <div className="letter">
                                        <div className="line blank"></div>
                                        <div className="line"></div>
                                        <div className="line"></div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="top"></div>
                                </div>
                            </a>
                            <div className="menu">
                                <div className="menu-line"></div>
                                <div className="menu-line"></div>
                                <div className="menu-line"></div>
                            </div>
                        </div>
                    </div>


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
import React, { Component } from "react";

import "./index.scss";
import "../navStuff/contact.scss"
import "../navStuff/menu.scss"


export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="nav-wrapper">
                        <div className="my-name-wrapper"><div id="name">Kabin Yang</div></div>
                        <button className="moon"></button>
                        <div className="contact-burger-holder">

                            <div className="contact">
                                <div classname="envelope">
                                    <div className="letter">
                                        <div className="line blank"></div>
                                        <div className="line"></div>
                                        <div className="line"></div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="top"></div>
                                </div>
                            </div>

                            <div className="menu">
                                <div className="menu-line"></div>
                                <div className="menu-line"></div>
                                <div className="menu-line"></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="title-name">Kabin Yang</div>
                <div className="thingy">Kabin</div>

                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
            </>
        )
    }
}
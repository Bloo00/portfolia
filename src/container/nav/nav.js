import React, { Component } from "react";

import "./menu.scss"
import "./contact.scss"

export default class Nav extends Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}
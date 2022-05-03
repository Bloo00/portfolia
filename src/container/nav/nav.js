import React, { Component } from "react";

import "./menu.scss"
import "./contact.scss"
import "./name.css"

export default class Nav extends Component {
    render() {
        return (
            <>
                <div className="nav-wrapper">
                    <a className="no-underscore"href="/">
                        <div className="top-name">Kabin Yang</div></a>
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
                        <a className="burger" href="/menu">
                        <div className="menu">
                            <div className="menu-line"></div>
                            <div className="menu-line"></div>
                            <div className="menu-line"></div>
                        </div>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}
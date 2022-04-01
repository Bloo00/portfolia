import React, { Component } from "react";
import "./index.scss";

export default class Burger extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" id="burger-toggle" />
                <div className="outer" id="outer">logo</div>
                <label for="burger-toggle" className="burger-menu">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
                <div className="menu">
                    <div className="menu-inner">
                        <div className="inner">logo</div>
                        <ul className="menu-nav">
                            <li className="menu-nav-item"><a className="menu-nav-link" href="/"><span>
                                <div>P1</div>
                            </span></a></li>
                            <li className="menu-nav-item"><a className="menu-nav-link" href="/about"><span>
                                <div>P2</div>
                            </span></a></li>
                            <li className="menu-nav-item"><a className="menu-nav-link" href="/Service"><span>
                                <div>P3</div>
                            </span></a></li>
                            <li className="menu-nav-item"><a className="menu-nav-link" href="/Team"><span>
                                <div>P4</div>
                            </span></a></li>
                        </ul>
                        <div className="gallery">
                            <div className="title">
                                <p>Kabin's Stuff</p>
                            </div>
                            <div className="images">
                                <a className="image-link" href="#">
                                    <div className="image" data-label="Star"><img src="" alt="webpage preview" /></div>
                                </a>
                                <a className="image-link" href="#">
                                    <div className="image" data-label="Sun"><img src="" alt="webpage preview" /></div>
                                </a>
                                <a className="image-link" href="#">
                                    <div className="image" data-label="Tree"><img src="" alt="webpage preview" /></div>
                                </a>
                                <a className="image-link" href="#">
                                    <div className="image" data-label="Sky"><img src="" alt="webpage preview" /></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from "react";

import "./contactStyle.css"

import Nav from "../nav/nav"

export default class Contact extends Component {
    render() {
        return (
            <>
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>

                <div className="contact-container">
                    <Nav />

                    <div className="title">hi there</div>
                </div>
            </>
        )
    }
}
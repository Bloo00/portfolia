import React, { Component } from "react";

import "./contactStyle.css"

import Nav from "../nav/nav"

export default class Contact extends Component {
    render() {
        return (
            <>
                

                <div className="contact-container">
                <Nav />
                
                <div className="title">In a Town Far Far away!~</div>
                <div className="meat">Would be a Me but...
                If we were neighbors you could just come talk to me but we arnt so
                this is our next best option. Unless you wanna mail me stuff but thats whack.
                </div>


                
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>

                </div>
                
            </>
        )
    }
}
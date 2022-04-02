import React, { Component } from "react";

import "./index.css";

import Burger from "../burger";

export default class Home extends Component {
    render() {
        return (
            <>
            <Burger/>
            <div className="container">
                <div classname="summary">summary</div>
                <div className="myface"><img src="https://cdn.discordapp.com/attachments/767642235293532160/959626838953574520/unknown.png" alt="my face"/></div>
                <div className="aboutme_container">
                    <div className="aboutme_title">title</div>
                    <div className="aboutme_meat">meat</div>
                    {/* <div classname="summary">A creative and motivated full-stack developer with a background in culinary arts, who is passionate about software development. Hard-working and always open to exciting new experiences. Archery and trumpet enthusiast.</div> */}
                </div>
                <div className="links_container">
                    <div></div>
                </div>
            </div>
            </>
        )
    }
}
import React, { useEffect, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';


import Home from "./container/home";
import Contact from "./container/contactPage/contact";

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path='/Contact' element={<Contact/>} />
          </Routes>
        </div>
      </Router>

    );
  }
}

export default App;

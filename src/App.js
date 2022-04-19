import React, { useEffect, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';


import Home from "./container/home";

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </div>
      </Router>

    );
  }
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {withAuthenticator} from '@aws-amplify/ui-react'

import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NotFound from "./NotFound"

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path = "*" element = { <NotFound/> } />
        <Route exact path="/" element = { <Home/> } />
        <Route path="/about" element = { <About/> } />
        <Route path="/login" element = { <Login/> } />
      </Routes>
    </Router>
  )
}

export default App;

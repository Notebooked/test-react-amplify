import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import NotFound from "./NotFound"

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path = "*" element={ <NotFound/> } />
        <Route exact path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
      </Routes>
    </Router>
  )
}

export default App;

import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-left-content">
        <Link className="nav-link nav-brand" to="/">BSA 485</Link>
      </div>
      <div className="nav-right-content">
        <Link className="nav-link nav-right" to="/about">About</Link>
        <Link className="nav-link nav-right" to="/about">Events</Link>
      </div>
    </div>
  )
}

export default Navbar;

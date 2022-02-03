import React from "react";
import "materialize-css";

function Navbar() {
    return (
        <nav class="transparent">
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">Lillian Paris</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/Resume">Resume</a></li>
            <li><a href="Developments">Developments</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
      </nav>

);
}

export default Navbar;
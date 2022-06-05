import React from "react";
import './navbar.css'

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
        <p class="navbar-brand">Atomic</p>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <p class="nav-link" href="#">Home</p>
            </li>
            <li class="nav-item">
              <p class="nav-link" href="#">About</p>
            </li>
            <li class="nav-item">
              <p class="nav-link" href="#">Company</p>
            </li>
            <li class="nav-item">
              <p class="nav-link" href="#">Dashboard</p>
            </li>
            <li class="nav-item">
              <p class="nav-link" href="#">Contact Us</p>
            </li>
          </ul>
        </div>
      </nav>
    )
}
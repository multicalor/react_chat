import React, { Component } from "react";

import './style.css'

class Header extends Component {
  render() {
    return (
      <header class="chat-header">
        <h1>
          <i class="fas fa-smile"></i> ChatCord
        </h1>
        <a href="index.html" class="btn">
          Leave Room
        </a>
      </header>
    );
  }
}

export default Header;

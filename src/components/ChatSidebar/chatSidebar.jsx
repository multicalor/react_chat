import React, { Component } from 'react';
import './style.css'


class ChatSidebar extends Component {

  render() {
    return (<div class="chat-sidebar">
      <h3><i class="fas fa-comments"></i> Room Name:</h3>
      <h2 id="room-name">JavaScript</h2>
      <h3><i class="fas fa-users"></i> Users</h3>
      <ul id="users">
        <li>Brad</li>
        <li>John</li>
        <li>Mary</li>
        <li>Paul</li>
        <li>Mike</li>
      </ul>
    </div>)
  }
}

export default ChatSidebar;
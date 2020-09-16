import React, { Component } from 'react';
import './style.css'

class SendForm extends Component {
    
    render() {
        return (<div class="chat-form-container">
        <form id="chat-form">
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autocomplete="off"
          />
          <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
        </form>
      </div>)
    }
  }

  export default SendForm;
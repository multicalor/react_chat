import React, { Component } from 'react';
import './style.css'

import Header from '../../components/Header/header'
import ChatSidebar from '../../components/ChatSidebar/chatSidebar';
import Messages from '../../components/Messages/messages'
import SendForm from '../../components/SendForm/sendForm';

class ChatContainer extends Component {

    render() {

        return (
            <div class="chat-container">
                <Header></Header>
                <div className='chat-main'>
                    <ChatSidebar />
                    <div class="chat-messages">
                        <Messages />
                    </div>
                    
                </div>
                <SendForm />
            </div>
        )
    }
}

export default ChatContainer;
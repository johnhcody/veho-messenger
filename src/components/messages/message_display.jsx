import React from 'react';
import ChatIndex from './chat_index';

class MessageDisplay extends React.Component {

    
    render() {
        if (window.location.href.endsWith('/#/')) {
            return (
                <div className="default-message-display-container">
                    <h1>No Messages Yet!</h1>
                    <h2>Click a user on the left to start a conversation</h2>
                </div>
            )
        } else {
            return (
                <div className="message-display-container">
                    <ChatIndex />
                </div>
            )
        }
    }
}

export default MessageDisplay;
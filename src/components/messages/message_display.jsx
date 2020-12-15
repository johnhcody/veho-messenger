import React from 'react';


class MessageDisplay extends React.Component {

    
    render() {
        if (window.location.href.endsWith('/#/')) {
            return (
                <div className="default-message-display-container">
                    <h1>No Messages Yet!</h1>
                    <h2>Click a user on the left to start a conversation</h2>
                </div>
            )
        }
        return (
            <div className="message-display-container">
                
            </div>
        )
    }
}

export default MessageDisplay;
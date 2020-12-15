import React from 'react';

class ChatIndex extends React.Component {
    constructor(props) {
        super(props);
        this.createChatBox = this.createChatBox.bind(this);
    }

    createChatBox() {
        // let userId = '';
        
        // debugger
        // let userInfo = window.localStorage.getItem([userId]).split(',');
        // let firstName = userInfo[0];
        // let lastName = userInfo[1];
        // let body = userInfo[userInfo.length - 1];

        
        // let chatBody = document.createElement("p");
        // chatBody.appendChild(body)
        

    }

    render() {
        // if (!chatBody || !button) {
        //     return null;
        // } else {
        let userId = '';
        if (window.location.href.endsWith('?')) {
            userId = window.location.href.slice(window.location.href.length - 4, (window.location.href.length - 1));
        } else {
            userId = window.location.href.slice(window.location.href.length - 3)
        }

        if (!window.localStorage.getItem([userId])) {
            return (
                null
            ) 
        } else {

            debugger


            let userInfo = window.localStorage.getItem([userId]).split(',');
            let firstName = userInfo[0];
            let lastName = userInfo[1];
            let body = userInfo[userInfo.length - 1];

            // let chatBody = document.createElement("p");
            // let button = document.createElement("button");
            // chatBody.innerText = body;
            // button.innerText = firstName[0] + lastName[0];
            debugger
            return (
                <>
                <div className="chat-box-wrapper">
                    <div className="chat-text-wrapper">
                        <p>{body}</p>
                    </div>
                </div>
                    <button>{`${firstName[0]}` + ` ${lastName[0]}`}</button>
                </>
            )

        }
        // }
    }
}

export default ChatIndex;
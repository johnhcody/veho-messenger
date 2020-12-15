import React from 'react';

class ChatIndex extends React.Component {
    constructor(props) {
        super(props);
        this.createChatBox = this.createChatBox.bind(this);
    }

    createChatBox() {

    }


    componentDidUpdate(prevProps, prevState) {
        
    }

    render() {

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
            let body = userInfo[2];
            let timeStamp = userInfo[userInfo.length - 1];

            
            debugger




            return (
                <>
                <div className="chat-box-wrapper">
                    <div className="chat-text-wrapper">
                        <p>{body}</p>
                    </div>
                </div>
                <div className="chat-icon-wrapper">
                    {/* G U for Guest User */}
                    <button>GU</button>
                    <p>{timeStamp}</p>
                </div>
                </>
            )

        }
        // }
    }
}

export default ChatIndex;
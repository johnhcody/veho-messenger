import React from 'react';

class ChatIndex extends React.Component {
    constructor(props) {
        super(props);
        this.createChatBox = this.createChatBox.bind(this);
        this.state = {
            ready: false
        }
    }

    createChatBox() {

    }


    componentDidMount() {
        setTimeout(
            () => this.setState(prevState => ({ ready: !prevState.ready })),
            Math.floor(Math.random() * 50000),
        );
        // setTimeout(function () { this.setState({ ready: true }); }, Math.floor(Math.random() * 5000));
        // setTimeOut(() => this.setState({ ready: true }), Math.floor(Math.random() * 50000))
    }

    componentWillUnmount() {
        //clearInterval(this.timer);
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
        } else if (!this.state.ready) {

            let userInfo = window.localStorage.getItem([userId]).split(',');
            let firstName = userInfo[0];
            let lastName = userInfo[1];
            let body = userInfo[2];
            let timeStamp = userInfo[userInfo.length - 1];


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

        } else if (this.state.ready) {
            let userInfo = window.localStorage.getItem([userId]).split(',');
            let firstName = userInfo[0];
            let lastName = userInfo[1];
            let body = userInfo[2];
            let timeStamp = userInfo[userInfo.length - 1];
            let response = window.localStorage.getItem('response');
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
                    <div className="response-wrapper">
                        <div className="chat-box-response">
                            <div className="chat-text-wrapper">
                                <p>{response}</p>
                            </div>
                        </div>
                        <div className="chat-icon-wrapper-response">
                            <button>{`${firstName[0]}${lastName[0]}`}</button>
                            <p>{timeStamp}</p>
                        </div>
                    </div>
                </>
            )
        }
        // }
    }
}

export default ChatIndex;
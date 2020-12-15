import React from 'react';

class ChatIndex extends React.Component {
    

    render() {
        let userId = '';
        if (window.location.href.endsWith('?')) {
            userId = window.location.href.slice(window.location.href.length - 4, (window.location.href.length - 1));
        } else {
            userId = window.location.href.slice(window.location.href.length - 3)
        }
        let userInfo = Object.values(window.localStorage.getItem([userId]))
        debugger
        return (
            <div>

            </div>
        )
    }
}

export default ChatIndex;
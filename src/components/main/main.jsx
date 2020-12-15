import React from 'react';
import '../../stylesheets/reset.css';
import '../../stylesheets/main.css';
import MessageIndex from '../messages/message_index';
import MessageButtons from '../messages/message_buttons';
import MessageDisplay from '../messages/message_display';

class MainPage extends React.Component {


    render() {
        return ( 
            <>
            <div className="main-component-container">
                <div className="message-index-wrapper">
                    <MessageIndex />
                </div>
                <div className="display-wrapper">
                    <MessageDisplay />
                </div>
            </div>
                    <MessageButtons />
            </>
        )
    }
}

export default MainPage;
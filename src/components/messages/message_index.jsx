import React from 'react';
import Data from './user_data';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
    render() {
        let users = Data;
        return (
            <div>
                <div className="message-index-container">

                    {
                        users.data.map((user, idx) => {
                            return <MessageIndexItem
                            key={idx}    
                            id={user.id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            />
                        })
                    }

                </div>
                <div className="message-buttons-container">
                    <button>New Conversation</button>
                </div>
            </div>
        )
    }
}

export default MessageIndex;
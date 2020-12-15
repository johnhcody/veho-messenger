import React from 'react';
import Data from './user_data';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
    render() {
        let users = Data;
        debugger
        return (
            <div className="message-index-container">

                {
                    users.data.map(user => {
                        return <MessageIndexItem
                            id={user.id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                        />
                    })
                }

            </div>
        )
    }
}

export default MessageIndex;
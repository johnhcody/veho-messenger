import React from 'react';

class MessageIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    //handleClick needs to start a new conversation, and also load most recent convo.
    // link to a new 

    render() {
        return (
            <div className="index-item-wrapper">
                <i className="far fa-user"></i>
                <p>{this.props.firstName}</p>
                <p>{this.props.lastName}</p>
            </div>
        )
    }

}

export default MessageIndexItem;
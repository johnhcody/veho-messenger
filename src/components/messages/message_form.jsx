import React from 'react';
import Data from './user_data';

class MessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: '',
            value: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        let users = Data;
        let userId = '';
        let firstName = '';
        let lastName = '';
        let userObj = {};
        if (typeof this.props.id === "undefined") {
            if (window.location.href.endsWith('?')) {
                userId = window.location.href.slice(window.location.href.length - 4, (window.location.href.length - 1));
            } else {
                userId = window.location.href.slice(window.location.href.length - 3)
            }

            userObj = users.data.filter(el => el.id == userId)[0];
            firstName = userObj.firstName;
            lastName = userObj.lastName;
        } else {
            userId = this.props.id;
            firstName = this.props.firstName;
            lastName = this.props.lastName;
        }
        return window.localStorage.setItem(`${userId}`, [firstName, lastName, this.state.body]);
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }


    render() {
        return (
            <div className="message-form-container">
                <form onSubmit={() => this.handleSubmit()} onChange={this.handleChange('body')}>
                    <textarea>

                    </textarea>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default MessageForm;
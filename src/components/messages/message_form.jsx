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


    findTimeStamp() {
        const months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December',
        };
        const daysOfWeek = {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
        };
        let dateObj = new Date;
        const fullHours = dateObj.getHours();
        let hours = fullHours % 12;
        if (hours === 0) hours = 12;
        const minutes = dateObj.getMinutes();
        const tmp = `0${minutes}`;
        const paddedMinutes = tmp.slice(tmp.length - 2);
        const ampm = fullHours < 12 || fullHours === 0 ? 'am' : 'pm';
        let day = dateObj.getDay();
        let month = dateObj.getMonth();
        let date = dateObj.getDate();
        month = months[month];
        day = daysOfWeek[day];
        let timeStamp = `${day}, ${month} ${date} at ${hours}:${paddedMinutes}${ampm}`
        return timeStamp
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
        let timeStamp = this.findTimeStamp();
        return window.localStorage.setItem(`${userId}`, [firstName, lastName, this.state.body, timeStamp]);
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
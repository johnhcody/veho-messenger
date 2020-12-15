import React from 'react';
import '../../stylesheets/reset.css';
import '../../stylesheets/main.css';
import MessageIndex from '../messages/message_index';
import MessageDisplay from '../messages/message_display';
import MessageForm from '../messages/message_form';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        if (!this.props.history.location.state) {
            this.state = {
                userId: '',
                firstName: '',
                lastName: '',
                value: 0
            }
        } else if (this.props.history.location.state.indexItem) {
            this.state = {
                userId: this.props.history.location.state.userId,
                firstName: this.props.history.location.state.firstName,
                lastName: this.props.history.location.state.lastName,
                value: 0
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.setState({value: this.state.value + 1})
        }
    }

    render() {
        return ( 
            <>
            <div className="main-component-container">
            <div className="message-index-wrapper">
                <MessageIndex />
            </div>
            <div className="display-wrapper">
                <MessageDisplay 
                    userId={this.state.userId}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}/>
            </div>
            </div>
                <MessageForm 
                    userId={this.state.userId}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}/>
            </>
        )
    }
}

export default MainPage;
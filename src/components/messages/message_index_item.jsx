import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class MessageIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            ready: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    //handleClick needs to start a new conversation, and also load most recent convo.
    // link to a new 

    handleClick() {
        debugger
        //this.setState({userId: this.props.id})
        this.setState({ready: true})
        //return <Link to={`messages/${this.props.id}`}/>
    }

    render() {
        let ready = this.state.ready;
        if (ready) {
            return (
                <>
                <Redirect to={`/messages/${this.props.id}`} />
                <div className="index-item-wrapper" onClick={() => this.handleClick()}>
                        <i className="far fa-user"></i>
                        <p>{this.props.firstName}</p>
                        <p>{this.props.lastName}</p>
                </div>
                </>
            )
        } else {
            return (
                <div className="index-item-wrapper" onClick={() => this.handleClick()}>
                        <i className="far fa-user"></i>
                        <p>{this.props.firstName}</p>
                        <p>{this.props.lastName}</p>
                </div>
            )
        }
    }

}

export default MessageIndexItem;
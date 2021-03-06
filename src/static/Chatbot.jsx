import React, { Component } from 'react';
import BackendService from './BackendService.js';
import './css/chatbot.css';

var backendService = new BackendService();

class Avatar extends Component {
    render() {
        return (
            <div className="avatar" />
        );
    }
}

class MessageBox extends Component {
    render() {
        return (
            <li className={`message ${this.props.appearance} appeared`}>
                <Avatar></Avatar>
                <div className="text_wrapper">
                    <div className="text">{this.props.message}</div>
                </div>
            </li>
        );
    }
}

class MessagesContainer extends Component {
    constructor(props) {
        super(props);
        this.createBotMessages = this.createBotMessages.bind(this);
    }

    scrollToBottom = () => {
        var el = this.refs.scroll;
        el.scrollTop = el.scrollHeight;
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    createBotMessages() {
        return this.props.messages.map((message, index) =>
            <MessageBox key={index} message={message["text"]} appearance={message["is_bot_message"] ? "left" : "right"} />
        );
    }

    render() {
        return (
            <ul className="messages" ref="scroll">
                {this.createBotMessages()}
            </ul>
        );
    }
}

class MessageTextBoxContainer extends Component {
    render() {
        return (
            <div className="message_input_wrapper">
                <input id="msg_input" className="message_input" placeholder="Type your message here..." value={this.props.message} onChange={this.props.onChange} onKeyPress={this.props._handleKeyPress} />
            </div>
        );
    }
}

class SendButton extends Component {
    render() {
        return (<div className="send_message" onClick={this.props.handleClick}>
            <div className="text">send</div>
        </div>);
    }
}

class Chatbot extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = { "messages": [], "current_message": "" }
        this.handleClick = this.handleClick.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
        this.onMessageTextBoxChange = this.onMessageTextBoxChange.bind(this);
        this.addMessageBox = this.addMessageBox.bind(this);
    }

    handleClick() {
        this.addMessageBox();
    }

    _handleKeyPress(e) {
        this.addMessageBox(e.key === "Enter")
    }

    componentDidMount() {
        this._isMounted = true;
        backendService.getHistory((result) => {
            if (this._isMounted) {
                this.setState({
                    messages: result
                });
                backendService.sendMessage('', (result) => {
                    if (this._isMounted) {
                        this.setState({
                            messages: [...this.state.messages, result]
                        });
                    }
                });
            }
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onMessageTextBoxChange(e) {
        this.setState({ current_message: e.target.value });
    }

    addMessageBox(enter = true) {
        let messages = this.state.messages;
        let current_message = this.state.current_message;
        if (current_message && enter) {
            messages = [...messages, { "text": current_message }];

            backendService.sendMessage(current_message, (result) => {
                this.setState({
                    messages: [...this.state.messages, result]
                });
            });

            current_message = ""
        }
        this.setState({
            current_message: current_message,
            messages
        });
    }

    render() {
        return (
            <div className="chat_window">
                <MessagesContainer messages={this.state.messages}></MessagesContainer>
                <div className="bottom_wrapper clearfix">
                    <MessageTextBoxContainer
                        _handleKeyPress={this._handleKeyPress}
                        onChange={this.onMessageTextBoxChange}
                        message={this.state.current_message}></MessageTextBoxContainer>
                    <SendButton handleClick={this.handleClick}></SendButton>
                </div>
            </div>
        );
    }
}

export default Chatbot;
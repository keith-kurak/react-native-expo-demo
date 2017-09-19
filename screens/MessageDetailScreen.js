import React, { Component } from 'react';
import MessageDetail from '../components/MessageDetail';
import LoadingSpinner from '../components/LoadingSpinner';
import getMessages from '../api/getMessages';

export default class MessageDetailScreen extends Component {
  static navigationOptions = {
    title: 'Detail',
  };

  constructor() {
    super();
    this.state = {
      message: null,
    };
  }

  componentWillMount = () => {
    setTimeout(() => {
      getMessages().then(messages => {
        const messageId = this.props.navigation.state.params.messageId;
        const message = messages[messageId];
        this.setState({ message });
      });
    }, 1000);
  };

  render = () => {
    const message = this.state.message;
    return message ? <MessageDetail message={message} /> : <LoadingSpinner />;
  };
}

import React, { Component } from 'react';
import MessageFeed from '../components/MessageFeed';
import getMessages from '../api/getMessages';
import NavbarIcon from '../components/NavbarIcon';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight:
    (<NavbarIcon
      onPress={() => navigation.navigate('CreateMessage')}
      name="open-in-new"
    />),
    headerLeft:
    (<NavbarIcon
      onPress={() => navigation.navigate('Chat')}
      name="chat"
      style={{ marginLeft: 5 }}
    />),
  });

  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  componentWillMount = () => {
    getMessages().then((messages) => {
      this.setState({
        messages,
      });
    });
  }

  render = () => {
    return (
      <MessageFeed
        messages={this.state.messages}
        onPressMessage={(id) => this.props.navigation.navigate('MessageDetail', {messageId: id})}
      />
    );
  }
};

import React from 'react';
import { NavigationActions } from 'react-navigation';
import Chat from '../components/chat';
import NavbarIcon from '../components/NavbarIcon';

export default class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Chat with React Native',
    headerLeft:
    (<NavbarIcon
      onPress={() => {
        const backAction = NavigationActions.back({ key: null });
        navigation.dispatch(backAction);
      }}
      name="close"
      style={{ marginLeft: 5 }}
    />),
  });

  render() {
    return <Chat />;
  }
}

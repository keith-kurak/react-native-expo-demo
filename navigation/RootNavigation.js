import { StackNavigator } from 'react-navigation';

import MainStackNavigator from './MainStackNavigator';
import CreateMessageStack from './CreateMessageStack';
import ChatStack from './ChatStack';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainStackNavigator,
    },
    CreateMessage: {
      screen: CreateMessageStack,
    },
    Chat: {
      screen: ChatStack,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
);

export default RootStackNavigator;

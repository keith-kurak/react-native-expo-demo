import { StackNavigator } from 'react-navigation';

import ChatScreen from '../screens/ChatScreen';

const ChatStack = StackNavigator(
  {
    ChatInitial: {
      screen: ChatScreen,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default ChatStack;

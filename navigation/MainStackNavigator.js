import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MessageDetailScreen from '../screens/MessageDetailScreen';

const MainStackNavigator = StackNavigator(
  {
    Tabs: {
      screen: MainTabNavigator,
    },
    MessageDetail: {
      screen: MessageDetailScreen,
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

export default MainStackNavigator;

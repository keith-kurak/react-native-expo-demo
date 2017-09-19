import { StackNavigator } from 'react-navigation';

import CreateMessageScreen from '../screens/CreateMessageScreen';

const CreateMessageStack = StackNavigator(
  {
    CreateInitial: {
      screen: CreateMessageScreen,
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

export default CreateMessageStack;

import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainStackNavigator from './MainStackNavigator';
import CreateMessageStack from './CreateMessageStack';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainStackNavigator,
    },
    CreateMessage: {
      screen: CreateMessageStack,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
);

export default RootStackNavigator;

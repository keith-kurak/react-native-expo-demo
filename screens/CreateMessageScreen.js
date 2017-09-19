import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import NavbarIcon from '../components/NavbarIcon';
import SimpleSampleComponent from '../components/SimpleSampleComponent';

export default class CreateMessageScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create Message',
    headerLeft:
    (<NavbarIcon
      onPress={() => {
        const backAction = NavigationActions.back({ key: null });
        navigation.dispatch(backAction);
      }}
      name="close"
    />),
  });

  constructor() {
    super();
  }

  render = () => {
    return (
      <View>
        <Text>Create Message UX here</Text>
        <SimpleSampleComponent
          title="The greatest component ever"
          detail="more details about said component"
          onPress={() => {
            Alert.alert("I'm a little teapot");
          }}
        />
      </View>
    );
  }
};

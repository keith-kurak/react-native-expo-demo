import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const LoadingSpinner = ({ message }) => (
  <View style={styles.screen}>
    <ActivityIndicator animating size="large" />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
});

export default LoadingSpinner;

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SimpleSampleComponent = ({ title, detail, onPress }) => (
  <View>
    <View style={styles.blueBox}>
      <Text style={styles.bigBoldText}>{title}</Text>
    </View>
    {detail && (
      <View style={styles.yellowBox}>
        <Text>{detail}</Text>
      </View>
    )}
    <Button title="I'm a button" onPress={onPress} />
  </View>
);

const styles = StyleSheet.create({
  blueBox: {
    backgroundColor: 'blue',
  },
  yellowBox: {
    backgroundColor: 'yellow',
  },
  bigBoldText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
});

export default SimpleSampleComponent;

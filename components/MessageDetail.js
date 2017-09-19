import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import moment from 'moment';
import Thumbnail from './Thumbnail';
import Colors from '../constants/Colors';

const IconTextPair = ({ renderIcon, text }) => (
  <View style={styles.iconTextPair}>
    {renderIcon()}
    <Text style={styles.detailText}>{text}</Text>
  </View>
);

const MessageDetail = ({ message }) => (
  <View style={styles.screen}>
    <View style={styles.thumbnail}>
      <Thumbnail diameter={50} name={message.user} />
    </View>
    <View style={styles.right}>
      <View style={styles.topRight}>
        <Text style={styles.usernameText}>{message.user}</Text>
      </View>
      <Text style={styles.messageText}>{message.text}</Text>
      <Text style={styles.detailText}>{moment(message.date).calendar()}</Text>
      <View style={styles.stats}>
        <IconTextPair renderIcon={() => <EvilIcons size={16} name="star" />} text={message.faves} />
        <IconTextPair
          renderIcon={() => <EvilIcons size={16} name="retweet" />}
          text={message.shares}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 7,
    paddingRight: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: Colors.background,
  },
  thumbnail: {
    paddingRight: 7,
  },
  right: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  topRight: {
  },
  usernameText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  detailText: {
    fontStyle: 'italic',
    fontSize: 12,
    color: 'gray',
  },
  messageText: {
    marginBottom: 8,
  },
  iconTextPair: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
  },
  stats: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default MessageDetail;

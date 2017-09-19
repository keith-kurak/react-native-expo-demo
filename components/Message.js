import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import Thumbnail from './Thumbnail';

const Message = ({ message, onPress }) => (
  <TouchableOpacity onPress={() => onPress(message.id)}>
    <View style={styles.cell}>
      <View style={styles.thumbnail}>
        <Thumbnail diameter={50} name={message.user} />
      </View>
      <View style={styles.right}>
        <View style={styles.topRight}>
          <Text style={styles.usernameText}>{message.user}</Text>
          <Text style={styles.dateText}>{getContextSensitiveDate(message.date)}</Text>
        </View>
        <Text>{message.text}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cell: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 7,
    paddingRight: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  thumbnail: {
    paddingRight: 7,
  },
  right: {
    flex: 1,
  },
  topRight: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  usernameText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  dateText: {
    fontStyle: 'italic',
    fontSize: 12,
    color: 'gray',
  }
});

const getContextSensitiveDate = date => {
  let formattedDate = '';

  const today = moment();
  const messageMoment = moment(date);

  if (messageMoment.isSame(today, 'd')) {
    formattedDate = messageMoment.format('h:mmA');
  } else {
    formattedDate = messageMoment.format('M/D/YYYY');
  }

  return formattedDate;
};

export default Message;

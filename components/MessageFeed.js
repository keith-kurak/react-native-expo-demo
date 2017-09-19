import React from 'react';
import { FlatList } from 'react-native';
import { sortBy } from 'underscore';
import Message from './Message';
import TableItemSeparator from './TableItemSeparator';
import Colors from '../constants/Colors';

const MessageFeed = ({ messages, onPressMessage }) => (
  <FlatList
    style={{ backgroundColor: Colors.background }}
    data={sortBy(messages, m => m.date.getTime()).reverse()}
    keyExtractor={message => message.id}
    renderItem={({ item }) => <Message message={item} onPress={onPressMessage} />}
    ItemSeparatorComponent={TableItemSeparator}
  />
);

export default MessageFeed;

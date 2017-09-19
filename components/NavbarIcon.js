import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const NavbarIcon = ({ name, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <MaterialIcons name={name} size={24} color={'black'} style={{ paddingRight: 8 }} />
  </TouchableOpacity>
);

export default NavbarIcon;

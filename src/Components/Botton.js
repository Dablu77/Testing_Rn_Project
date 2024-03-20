import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Colors';

const Button = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      activeOpacity={0.8}
      onPress={props.onPress}
      style={{
        marginHorizontal: 10,
        borderRadius: 4,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.blue,
      }}>
      <Text
        style={{
          color: Colors.white,
          fontWeight: '500',
          letterSpacing: 0.5,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

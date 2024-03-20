import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {heightPixel, widthPixel} from '../utils/Dimensions';
import {Colors} from '../utils/Colors';
import {EntypoIcon, MaterialIcon} from '../utils/Const';

const MyHeaders = props => {
  return (
    <View style={Styles.Header}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.onPress}
        style={[Styles.TouchboxOne, {backgroundColor: props.backgroundColor}]}>
        <MaterialIcon
          size={26}
          title={'keyboard-backspace'}
          IconColor={props.IconColor}
        />
      </TouchableOpacity>
      <Text style={[Styles.titleStyles, {color: props.TitleColor}]}>
        {props.Title}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.dotsonPress}
        style={[
          Styles.Touchbox2,
          {backgroundColor: props.dotsbackgroundColor},
        ]}>
        <EntypoIcon size={20} title={props.dotsIcon} IconColor={Colors.blue} />
      </TouchableOpacity>
    </View>
  );
};

export default MyHeaders;

const Styles = StyleSheet.create({
  Header: {
    backgroundColor: Colors.white,
    paddingHorizontal: '3%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: heightPixel(100),
    flexDirection: 'row',
  },
  TouchboxOne: {
    height: heightPixel(55),
    width: widthPixel(55),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyles: {
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  Touchbox2: {
    height: heightPixel(55),
    width: widthPixel(55),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// GlobalLoader.js
//Create By Dablu!

import React from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from './Dimensions';
import {Colors} from './Colors';

const GlobalLoader = ({isLoading}) => {
  return (
    <Modal visible={isLoading} transparent={true} animationType="fade">
      <View style={Styles.Loader_Box}>
        <View style={Styles.White_Box}>
          <ActivityIndicator size="large" color={Colors.blue} />
        </View>
      </View>
    </Modal>
  );
};

export default GlobalLoader;

const Styles = StyleSheet.create({
  Loader_Box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  White_Box: {
    height: heightPixel(100),
    width: widthPixel(100),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
});

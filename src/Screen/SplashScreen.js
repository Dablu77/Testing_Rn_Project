import {StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../utils/Colors';
import {CustomStatusBar, MpayLogo} from '../utils/Const';
import {heightPixel, widthPixel} from '../utils/Dimensions';
import Routes from '../Navigation/Routes';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Routes.SIGN_UP_SCREEN, {
        screen: Routes.SIGN_UP_SCREEN,
      });
    }, 9000);
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <CustomStatusBar />
      <Image
        source={MpayLogo}
        style={Styles.MpayImagStyles}
        // resizeMode="center"
      />
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MpayImagStyles: {
    height: heightPixel(133),
    width: widthPixel(284),
  },
});

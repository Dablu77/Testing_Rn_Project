import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from '../Routes';
import SplashScreen from '../../Screen/SplashScreen';
import SignupScreen from '../../Screen/SignupScreen';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={Routes.SCREEN_SPLASH}>
      <Stack.Screen
        name={Routes.SCREEN_SPLASH}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.SIGN_UP_SCREEN}
        component={SignupScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;

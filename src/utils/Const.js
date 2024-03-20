import {StatusBar} from 'react-native';
import {Colors} from './Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-simple-toast';

const MpayLogo = require('../Assets/Image/MrupeesLogo.png');
const GoogleImage = require('../Assets/Image/google.png');

const IonIcons = ({title, size, IconColor, IconStyle}) => (
  <Ionicons
    name={title}
    size={size}
    color={IconColor}
    style={IconStyle || {}}
  />
);

const MaterialIcon = ({title, size, IconColor, IconStyle}) => (
  <MaterialIcons
    name={title}
    size={size}
    color={IconColor}
    style={IconStyle || {}}
  />
);

const EntypoIcon = ({title, size, IconColor, IconStyle}) => (
  <Entypo name={title} size={size} color={IconColor} style={IconStyle || {}} />
);

const CustomStatusBar = () => {
  return <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />;
};

const SimpleToast = ({title, isLong}) => {
  isLong ? Toast.show(title, Toast.LONG) : Toast.show(title, Toast.SHORT);
};

export {
  MpayLogo,
  CustomStatusBar,
  IonIcons,
  MaterialIcon,
  EntypoIcon,
  GoogleImage,
  SimpleToast,
};

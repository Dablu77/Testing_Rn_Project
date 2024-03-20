import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../utils/Colors';
import {fontPixel, heightPixel, widthPixel} from '../utils/Dimensions';
import {Checkbox, TextInput} from 'react-native-paper';
import {CustomStatusBar, GoogleImage, SimpleToast} from '../utils/Const';
import GlobalLoader from '../utils/GlobalLoader';
import MyHeaders from '../Components/MyHeaders';
import Button from '../Components/Botton';

export default function SignupScreen({navigation}) {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isPassowrd, setIsPassword] = useState('');
  const [isPassowrdError, setIsPasswordError] = useState('');

  const validateFirstName = () => {
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(firstName)) {
      setFirstNameError('Please enter a valid First Name');
      SimpleToast({title: 'Please enter a valid First Name.', isLong: true});
      return false;
    } else {
      setFirstNameError('');
      return true;
    }
  };

  const validateLastName = () => {
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(lastName)) {
      setLastNameError('Please enter a valid Last Name');
      SimpleToast({title: 'Please enter a valid Last Name.', isLong: true});
      return false;
    } else {
      setLastNameError('');
      return true;
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
      SimpleToast({title: 'Please enter a valid email address.', isLong: true});

      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = () => {
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(isPassowrd)) {
      setIsPasswordError('Please enter a valid Password');
      SimpleToast({title: 'Please enter a valid Password.', isLong: true});
      return false;
    } else {
      setIsPasswordError('');
      return true;
    }
  };

  const _Sign_Heandle = () => {
    const isValidfirstName = validateFirstName(firstName);
    const isValidLastName = validateLastName(lastName);
    const isValidEmail = validateEmail(email);
    const isvalidPassword = validatePassword(isPassowrd);

    if (
      isValidfirstName &&
      isValidLastName &&
      isValidEmail &&
      isvalidPassword
    ) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        SimpleToast({title: 'Welcome Back', isLong: true});
      }, 3000);
    } else {
      console.log('Catch Error:');
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <CustomStatusBar />
      <MyHeaders
        backgroundColor={Colors.blue}
        IconColor={Colors.white}
        onPress={() => navigation.goBack()}
      />
      <View style={Styles.Header}>
        <Text style={Styles.Headertext}>Create your account</Text>
        <Text style={Styles.Sub_Text}>
          It only takes a minute to create your account
        </Text>
        <View style={Styles.Row_Input_Box}>
          <TextInput
            label="First Name"
            mode="outlined"
            textColor={Colors.black}
            returnKeyType="next"
            placeholderTextColor={Colors.grey141}
            outlineColor={firstNameError ? Colors.darkRed : Colors.blueLight}
            activeOutlineColor={
              firstNameError ? Colors.darkRed : Colors.blueLight
            }
            value={firstName}
            onChangeText={text => setFirstName(text)}
            theme={{colors: {text: 'white', primary: Colors.grey141}}}
            style={Styles.Input}
          />
          <TextInput
            label="Last Name"
            mode="outlined"
            textColor={Colors.black}
            placeholderTextColor={Colors.grey141}
            outlineColor={lastNameError ? Colors.darkRed : Colors.blueLight}
            activeOutlineColor={
              lastNameError ? Colors.darkRed : Colors.blueLight
            }
            value={lastName}
            onChangeText={text => setLastName(text)}
            theme={{colors: {text: 'white', primary: Colors.grey141}}}
            style={Styles.Input}
          />
        </View>
        <TextInput
          label="Please enter Email"
          mode="outlined"
          textColor={Colors.black}
          keyboardType="email-address"
          placeholderTextColor={Colors.grey141}
          outlineColor={emailError ? Colors.darkRed : Colors.blueLight}
          activeOutlineColor={emailError ? Colors.darkRed : Colors.blueLight}
          value={email}
          onChangeText={text => setEmail(text)}
          theme={{colors: {text: 'white', primary: Colors.grey141}}}
          style={Styles.Input2}
        />
        <TextInput
          label="Password"
          mode="outlined"
          textColor={Colors.black}
          placeholderTextColor={Colors.grey141}
          outlineColor={isPassowrdError ? Colors.darkRed : Colors.blueLight}
          activeOutlineColor={
            isPassowrdError ? Colors.darkRed : Colors.blueLight
          }
          value={isPassowrd}
          onChangeText={text => setIsPassword(text)}
          theme={{colors: {text: 'white', primary: Colors.grey141}}}
          style={Styles.Input2}
        />
        <View style={Styles.Term_Box}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={Colors.lighterGreenColor}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <View style={Styles.Term_Title_Box}>
            <Text style={Styles.Gray_Sub_Text}>I agree the Cryptomark </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={Styles.Green_Sub_Title}>Terms of Services</Text>
            </TouchableOpacity>
            <Text style={Styles.Gray_Sub_Text}> and</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={{color: Colors.lighterGreenColor, fontWeight: '500'}}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{marginTop: heightPixel(110)}}>
        <Button
          disabled={checked ? false : true}
          title={'Confirm'}
          onPress={_Sign_Heandle}
        />
      </View>
      <View style={Styles.Or_Box}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center', color: Colors.gray}}>
            OR
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      <TouchableOpacity activeOpacity={0.7} style={Styles.Google_Button}>
        <Image source={GoogleImage} style={Styles.Google_Image} />
        <Text style={Styles.Google_Text}>Continue with Google</Text>
      </TouchableOpacity>
      <View style={Styles.footerbox}>
        <Text style={Styles.textfooter1}>Already registered?</Text>
        <TouchableOpacity activeOpacity={0.7} style={Styles.textfooter2}>
          <Text style={{color: Colors.lightGreenColor, fontWeight: '500'}}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      <GlobalLoader isLoading={isLoading} />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Header: {marginHorizontal: 10, marginTop: 10},
  Headertext: {
    color: Colors.blue,
    fontSize: fontPixel(25),
    fontWeight: '700',
  },
  Row_Input_Box: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Input: {
    backgroundColor: Colors.grey,
    height: heightPixel(50),
    color: Colors.black,
    marginTop: 10,
    width: widthPixel(180),
  },
  Input2: {
    backgroundColor: Colors.grey,
    height: heightPixel(50),
    color: Colors.white,
    marginTop: 10,
  },
  footerbox: {
    // flex: 1,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textfooter1: {
    color: Colors.gray,
    fontSize: fontPixel(16),
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  textfooter2: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  Sub_Text: {
    color: Colors.gray,
    letterSpacing: 0.5,
    marginTop: 5,
  },
  Term_Box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Term_Title_Box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 13,
  },
  Gray_Sub_Text: {color: Colors.gray, fontSize: fontPixel(15)},
  Green_Sub_Title: {
    color: Colors.lighterGreenColor,
    fontWeight: '500',
    fontSize: fontPixel(16),
  },
  Google_Button: {
    backgroundColor: Colors.black,
    marginHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    borderRadius: 4,
    marginTop: 50,
  },
  Google_Text: {
    color: Colors.white,
    fontSize: fontPixel(15),
    fontWeight: '500',
    letterSpacing: 0.5,
    paddingLeft: 10,
  },
  Google_Image: {
    height: heightPixel(25),
    width: widthPixel(25),
  },
  Or_Box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 30,
  },
});

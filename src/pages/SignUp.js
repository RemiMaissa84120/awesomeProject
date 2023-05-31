/* eslint-disable no-undef */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomButton from '../components/custom/CustomButton';
import CustomInput from '../components/custom/CustomInput';
import CustomBackButton from '../components/custom/CustomBackButton';

export default function SignUp({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomBackButton
          title={'Sign Up'}
          navigation={navigation}
          destination={'SplashScreen'}
        />

        <CustomInput label={'Name'} placeholder='John Doe' />
        <CustomInput label={'E-mail'} placeholder='example@gmail.com' />
        <CustomInput
          label={'Password'}
          placeholder='***********'
          secureTextEntry
        />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={handleCheckboxPress}>
            <View
              style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
              {isChecked && (
                <Icon
                  name='check'
                  size={14}
                  color='#fff'
                  style={styles.checkIcon}
                />
              )}
            </View>
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            I agree with <Text style={{ fontWeight: 'bold' }}>Terms </Text>&{' '}
            <Text style={{ fontWeight: 'bold' }}>Privacy</Text>
          </Text>
        </View>

        <CustomButton
          filled={true}
          title='Sign Up'
          color={'#4F63AC'}
          style={styles.customButton}
          onPress={() => navigation.navigate('BottomTabs')}
        />

        <Text style={styles.orText}>
          <View style={styles.line} />
          <Text style={styles.orSignUpText}>or Sign up with</Text>
          <View style={styles.line} />
        </Text>
        <TouchableOpacity style={styles.googleButton}>
          <Icon
            name='google'
            size={35}
            color='white'
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signInLink}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInLinkText}>
            Already have an account?{' '}
            <Text style={{ fontWeight: 'bold' }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#4F63AC',
    borderRadius: 4,
  },
  checkboxChecked: {
    backgroundColor: '#4F63AC',
  },
  checkboxText: {
    fontSize: 16,
    fontWeight: '400',
  },
  checkIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -7 }, { translateY: -7 }],
  },
  customButton: {
    width: '80%',
    marginTop: 30,
  },
  orText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#333',
  },
  orSignUpText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4F63AC',
    backgroundColor: '#3F4A59',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '35%',
    height: 60,
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 14,
  },
  googleIcon: {},
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4F63AC',
  },
  signInLink: {
    marginTop: 30,
    marginBottom: 30,
  },
  signInLinkText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4F63AC',
    textDecorationLine: 'none',
  },
});

/* eslint-disable no-undef */
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/AuthContext';

import CustomButton from '../components/custom/CustomButton';
import CustomInput from '../components/custom/CustomInput';
import CustomBackButton from '../components/custom/CustomBackButton';

export default function SignUp({ navigation }) {
  const { setUser } = useContext(AuthContext);

  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');

  const handleSend = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        navigation.navigate('BottomTabs');
        console.log('Réponse valide:', data);
        setUser(data);
      } else {
        throw new Error('Échec de la requête');
      }
    } catch (error) {
      console.log('Erreur:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomBackButton
          title={'Sign In'}
          navigation={navigation}
          destination={'SplashScreen'}
        />
        <CustomInput
          label={'User Name'}
          placeholder='kminchelle'
          onChangeText={setUsername}
          value={username}
        />
        <CustomInput
          label={'Password'}
          placeholder='***********'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <CustomButton
          filled={true}
          title='Sign In'
          color={'#4F63AC'}
          style={styles.customButton}
          onPress={handleSend}
        />

        <Text style={styles.orText}>
          <View style={styles.line} />
          <Text style={styles.orSignUpText}>or Sign In with</Text>
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
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signInLinkText}>
            Don’t have an account?
            <Text style={{ fontWeight: 'bold' }}> Sign Up</Text>
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
  IconSignUp: {},
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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

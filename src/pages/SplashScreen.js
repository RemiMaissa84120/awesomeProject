/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomButton from '../components/custom/CustomButton';

const windowWidth = Dimensions.get('window').width;

export default function SplashScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../assets/splashScreen/10050_1.png')}
          style={[styles.logo]}
          resizeMode='contain'
        />
        <Text style={styles.title}>
          You’ll Find {'\n'}
          <Text style={styles.subtitle}> All you need </Text> {'\n'} Here!
        </Text>
        <CustomButton
          filled={true}
          title='Sign Up'
          style={styles.customButton}
          onPress={() => navigation.navigate('SignUp')}
        />
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: undefined,
    aspectRatio: 1,
    width: windowWidth * 0.9,
    marginTop: 45,
  },
  title: {
    marginTop: 33,
    fontSize: 40,
    fontWeight: '700',
    color: '#303030',
    textAlign: 'center',
  },
  subtitle: {
    color: '#FCA34D',
    textDecorationLine: 'underline',
  },
  linkContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  link: {
    fontWeight: 'bold',
    color: '#4F63AC',
  },
  customButton: {
    width: '80%',
    marginTop: 55,
  },
});

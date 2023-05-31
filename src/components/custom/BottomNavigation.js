import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name='home' size={24} color='black' />
      </View>
      <View style={styles.iconContainer}>
        <Icon name='bookmark' size={24} color='black' />
      </View>
      <View style={styles.iconContainer}>
        <Icon name='user' size={24} color='black' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
});

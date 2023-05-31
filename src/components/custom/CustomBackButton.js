import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomBackButton({ title, navigation, destination }) {
  const handlePress = () => {
    navigation.navigate(destination);
  };

  return (
    <TouchableOpacity style={styles.backButton} onPress={handlePress}>
      <Icon
        name='arrow-left'
        size={30}
        color='#4F63AC'
        style={styles.IconSignUp}
      />
      <Text style={styles.backButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    left: 20,
    top: 20,
    width: '100%',
    marginTop: 30,
  },
  backButtonText: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 80,
    color: '#4F63AC',
    lineHeight: 32,
    marginLeft: 15,
  },
});

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ProfileCard = ({ title, subtitle, onPress }) => {
  return (
    <TouchableOpacity
      style={
        subtitle ? styles.containerItem : styles.containerItemWithoutSubtitle
      }
      onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <Icon name='chevron-right' size={24} color='#9E9E9E' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    marginBottom: 26,
  },
  containerItemWithoutSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 26,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: '#4F63AC',
    fontWeight: 'bold',
  },
  subtitle: {
    paddingTop: 5,
    fontSize: 12,
    color: '#808080',
  },
});

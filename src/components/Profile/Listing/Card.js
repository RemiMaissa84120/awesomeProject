import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = ({ data, onDelete }) => {
  const { title, image, price } = data;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={onDelete}>
        <Icon name='trash' size={20} color='#000000' />
      </TouchableOpacity>
    </View>
  ); z;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'flex-start',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  contentContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000000',
  },
  price: {
    fontSize: 14,
    color: '#000000',
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});

export default Card;

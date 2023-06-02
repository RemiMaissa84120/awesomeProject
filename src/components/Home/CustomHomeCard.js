import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHomeCard = ({ data }) => {
  const { images, title, price } = data;
  const navigation = useNavigation();

  const navigateToProduct = () => {
    navigation.navigate('Product', { data });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToProduct}>
      {images.length > 1 ? (
        <Image source={{ uri: images[0] }} style={styles.image} />
      ) : (
        <View style={styles.imageContainer}>
          <Image source={{ uri: images[0] }} style={styles.image} />
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 253,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'Nunito Sans',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CustomHomeCard;

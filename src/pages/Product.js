import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/custom/CustomButton';
import { useRoute } from '@react-navigation/native';
import { FavoriteContext } from '../context/FavoriteContext';

const Product = ({ navigation }) => {
  const route = useRoute();
  const { data } = route.params;

  const { images, title, price, description } = data;

  const { favorite, setFavorite } = useContext(FavoriteContext);

  const isFavorite = favorite.findIndex(item => item.id === data.id) !== -1;

  const handleSaveFavorite = () => {
    if (isFavorite) {
      // Remove the data from the favorite array
      const updatedFavorite = favorite.filter(item => item.id !== data.id);
      setFavorite(updatedFavorite);
    } else {
      // Add the data to the favorite array
      const updatedFavorite = [...favorite, data];
      setFavorite(updatedFavorite);
    }

    console.log(favorite);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {images.length > 0 ? (
          <Image source={{ uri: images[0] }} style={styles.image} />
        ) : (
          <View style={styles.imageContainer}>
            <Text>No Image</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => navigation.goBack()}>
          <Icon name='chevron-left' size={24} color='#000000' />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.bookmarkContainer}
          onPress={handleSaveFavorite}>
          <Icon
            name='bookmark'
            size={24}
            color={isFavorite ? '#4F63AC' : '#000000'}
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
        <CustomButton
          title='Contact Seller'
          filled={true}
          color='#4F63AC'
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: '55%',
    position: 'relative',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'stretch',
  },
  backIconContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#fff',
    padding: 8,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#303030',
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#303030',
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
    color: '#606060',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    width: '100%',
  },
  bookmarkIcon: {
    marginRight: 50,
  },
  button: {
    width: '60%',
  },
});

export default Product;

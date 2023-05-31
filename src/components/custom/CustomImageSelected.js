import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomImageSelected = ({ imageUrl, onClose, onAdd }) => {
  const showImage = Boolean(imageUrl);

  const handleDeleteImage = () => {
    onClose();
  };

  return (
    <View style={styles.container}>
      {showImage ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode='cover'
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleDeleteImage}>
            <Icon name='times' size={15} color='white' />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.iconContainer} onPress={onAdd}>
          <Icon name='plus' size={30} color='#4F63AC' />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 5,
  },
});

export default CustomImageSelected;

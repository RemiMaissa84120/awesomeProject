import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListingContext } from '../../../context/ListingContext';

import CustomInput from '../../custom/CustomInput';
import CustomSelect from '../../custom/CustomSelect';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories } from '../../../data/categories';
import CustomImageSelected from '../../custom/CustomImageSelected';

const NewListing = ({ navigation }) => {
  const { listing, setListing } = useContext(ListingContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSaveListing = () => {
    // Vérifier si tous les champs sont remplis
    if (title === '' || description === '' || price === '' || category === '') {
      Alert.alert('Warning', 'Please fill in all fields before submitting.');
      return;
    }

    const listingItem = {
      id: new Date().getTime()
        .toString(),
      title,
      description,
      price,
      category,
      image:
        'https://cdn.shopify.com/s/files/1/0079/2539/9616/products/myakka-chairs-jalkamal-block-print-footstool-28730051264703_2000x.jpg?v=1629217511',
    };

    setListing([...listing, listingItem]);
    console.log('listing:', listing);

    navigation.navigate('MyListing');
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backIconContainer}
              onPress={() => navigation.goBack()}>
              <Icon name='chevron-left' size={16} color='#000000' />
            </TouchableOpacity>
            <Text style={styles.title}>Create a new listing</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Upload photos</Text>
          </View>

          <View style={styles.viewListImage}>
            {/* select image */}
            <CustomImageSelected
              onAdd={() => {
                console.log('add image');
              }}
            />
            <ScrollView horizontal>
              {/* image selectionnée */}
              <CustomImageSelected
                imageUrl={
                  'https://cdn.shopify.com/s/files/1/0079/2539/9616/products/myakka-chairs-jalkamal-block-print-footstool-28730051264703_2000x.jpg?v=1629217511'
                }
                onClose={() => {
                  console.log('image delete');
                }}
              />
            </ScrollView>
          </View>

          <CustomInput
            label='Title'
            placeholder='Listing Title'
            value={title}
            onChangeText={setTitle}
            style={styles.CustomInput}
          />

          <CustomSelect
            label='Category'
            placeholder='Select the category'
            value={category}
            onSelect={setCategory}
            options={categories.map(categoryItem => categoryItem.title)}
            style={(styles.categoryContainer, styles.CustomInput)}
          />

          <CustomInput
            label='Price'
            placeholder='Enter price in USD'
            value={price}
            onChangeText={setPrice}
            keyboardType='numeric'
            style={styles.CustomInput}
          />

          <CustomInput
            label='Description'
            placeholder='Tell us more...'
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={6}
            style={styles.CustomInput}
          />

          <TouchableOpacity style={styles.button} onPress={handleSaveListing}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <Modal
            visible={isModalVisible}
            animationType='slide'
            transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {categories.map(categoryItem => (
                  <TouchableOpacity
                    key={categoryItem.id}
                    style={styles.categoryItem}
                    onPress={() => handleCategorySelect(categoryItem.title)}>
                    <Text style={styles.categoryItemText}>
                      {categoryItem.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#EFEFEF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 30,
  },
  CustomInput: {
    width: '100%',
  },
  viewListImage: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rowLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    color: '#4F63AC',
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  categoryContainer: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4F63AC',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    width: '80%',
    maxHeight: '80%',
  },
  categoryItem: {
    paddingVertical: 8,
  },
  categoryItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default NewListing;

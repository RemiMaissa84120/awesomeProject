import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListingContext } from '../context/ListingContext';
import { Picker } from '@react-native-picker/picker';

import CustomInput from '../components/custom/CustomInput';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewListing = ({ navigation }) => {
  const { listing, setListing } = useContext(ListingContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories',);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    console.log('listing:', listing);
  }, [listing]);

  const handleSaveListing = () => {
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

    navigation.navigate('MyListing');
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

          <CustomInput
            label='Title'
            placeholder='Listing Title'
            value={title}
            onChangeText={setTitle}
            style={styles.CustomInput}
          />

          <View style={styles.categoryContainer}>
            <Picker
              selectedValue={category}
              onValueChange={itemValue => setCategory(itemValue)}
              style={styles.picker}>
              <Picker.Item label='Select the category' value='' />
              {categories.map(categoryItem => (
                <Picker.Item
                  key={categoryItem}
                  label={categoryItem}
                  value={categoryItem}
                />
              ))}
            </Picker>
          </View>

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
    borderWidth: 1,
    borderColor: '#4F63AC',
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  categoryText: {
    fontSize: 16,
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

  picker: {
    width: '100%',
    height: 40,
  },
});

export default NewListing;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHomeCard from '../components/Home/CustomHomeCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories',);
        const data = await response.json();
        setCategories(['Popular', ...data]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) => {
    if (
      (searchText !== '' &&
        !item.title.toLowerCase().includes(searchText.toLowerCase())) ||
      (selectedCategory !== null &&
        selectedCategory !== '' &&
        selectedCategory !== 'Popular' &&
        item.category !== selectedCategory)
    ) {
      return false;
    }
    return true;
  });

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === undefined || category === '' ? null : category,);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollViewContainer}>
          <View style={styles.header}>
            {isSearchVisible ? (
              <TextInput
                style={styles.searchInput}
                placeholder='Search by name'
                value={searchText}
                onChangeText={setSearchText}
              />
            ) : (
              <TouchableOpacity onPress={() => setIsSearchVisible(true)}>
                <Icon name='search' size={20} color='black' />
              </TouchableOpacity>
            )}
            <Text style={styles.title}>Find All You Need</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewIcon}>
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() => handleCategorySelect(item)}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.viewCard}>
            {filteredProducts.map(item => (
              <CustomHomeCard key={item.id} data={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 30,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  item: {
    alignItems: 'center',
    marginRight: 16,
  },
  itemText: {
    marginTop: 8,
    textAlign: 'center',
  },
  scrollViewIcon: {
    marginBottom: 20,
  },
  viewCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

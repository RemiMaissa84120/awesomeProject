import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHomeCard from '../components/Home/CustomHomeCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filtrer les produits en fonction de la recherche et de la catégorie sélectionnée
  const filteredProducts = products.filter((item) => {
    if (
      (searchText !== '' &&
        !item.title.toLowerCase().includes(searchText.toLowerCase())) ||
      (selectedCategory !== null &&
        selectedCategory !== '' &&
        item.category !== selectedCategory)
    ) {
      return false; // Ne pas afficher si le nom ne correspond pas à la recherche ou à la catégorie sélectionnée
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
                onPress={() => handleCategorySelect(item.id)}>
                <View
                  style={[
                    styles.iconContainer,
                    index === 0
                      ? styles.iconContainerBlack
                      : styles.iconContainerGray,
                  ]}>
                  <Image source={{ uri: item.image }} style={styles.icons} />
                </View>
                <Text style={styles.itemText}>{item.title}</Text>
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
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconContainerBlack: {
    backgroundColor: 'black',
  },
  iconContainerGray: {
    backgroundColor: '#E8E8E8',
  },
  itemText: {
    marginTop: 8,
    textAlign: 'center',
  },
  icons: {
    width: 40,
    height: 40,
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

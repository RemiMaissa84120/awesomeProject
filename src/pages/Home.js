import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHomeCard from '../components/Home/CustomHomeCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollViewContainer}>
          <View style={styles.header}>
            <Icon name='search' size={20} color='black' />
            <Text style={styles.title}>Find All You Need</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewIcon}>
            {categories.map((item, index) => (
              <View style={styles.item} key={index}>
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
              </View>
            ))}
          </ScrollView>
          <View style={styles.viewCard}>
            {products.map(item => (
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
});

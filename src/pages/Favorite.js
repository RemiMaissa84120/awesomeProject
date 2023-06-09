import React, { useContext } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { FavoriteContext } from '../context/FavoriteContext';
import CustomFavoriteCard from '../components/Favorite/CustomFavoriteCard';

const Favorite = () => {
  const { favorite, setFavorite } = useContext(FavoriteContext);

  const handleDeleteFavorite = (itemId) => {
    const updatedFavorite = favorite.filter(item => item.id !== itemId);
    setFavorite(updatedFavorite);
  };

  console.log('favorite', favorite);
  return (
    <ScrollView style={styles.container}>
      {favorite.map(item => (
        <CustomFavoriteCard
          key={item.id}
          data={item}
          onDelete={() => handleDeleteFavorite(item.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default Favorite;

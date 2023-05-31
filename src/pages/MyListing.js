import React, { useContext } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ListingContext } from '../context/ListingContext';
import Card from '../components/Profile/Listing/Card';

const MyListing = () => {
  const { listing, setListing } = useContext(ListingContext);

  const handleDeletelisting = (itemId) => {
    const updatedlisting = listing.filter(item => item.id !== itemId);
    setListing(updatedlisting);
  };

  return (
    <ScrollView style={styles.container}>
      {listing.map(item => (
        <Card
          key={item.id}
          data={item}
          onDelete={() => handleDeletelisting(item.id)}
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

export default MyListing;

import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProfileCard } from '../components/Profile/ProfileCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/AuthContext';
import { ListingContext } from '../context/ListingContext';
import CustomButton from '../components/custom/CustomButton';

const Profile = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  const { listing } = useContext(ListingContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => {
            setUser();
          }}>
          <Icon name='sign-out' size={20} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.text1}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.text2}>{user.email}</Text>
      </View>
      <ProfileCard
        title={'My Listings'}
        subtitle={`Already have ${listing.length} listing`}
        onPress={() => {
          navigation.navigate('MyListing');
        }}
      />
      <ProfileCard
        title={'Settings'}
        subtitle={'Account, FAQ, Contact'}
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />

      <CustomButton
        title={'Add a new listing'}
        onPress={() => {
          navigation.navigate('NewListing');
        }}
        style={styles.customButton}></CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 16,
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
  content: {
    marginBottom: 26,
  },
  text1: {
    fontWeight: '700',
    fontSize: 20,
    color: '#303030',
  },
  text2: {
    fontWeight: '400',
    fontSize: 14,
    color: '#303030',
  },
  customButton: {
    width: '90%',
    marginBottom: 50,
    position: 'absolute',
    bottom: 0,
  },
});

export default Profile;

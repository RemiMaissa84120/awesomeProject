import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/AuthContext';

import CustomInput from '../components/custom/CustomInput';
import { ProfileCard } from '../components/Profile/ProfileCard';

const Settings = () => {
  const { user, setUser } = useContext(AuthContext);

  const [firstName, setFirstName] = useState(`${user.firstName}`);
  const [email, setEmail] = useState(`${user.email}`);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditPress = () => {
    setIsEditing(!isEditing);
    setFirstName(`${user.firstName}`);
    setEmail(`${user.email}`);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);

    const updatedUser = { ...user, firstName, email };
    setUser(updatedUser);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.rowLabel}>Personal Information</Text>
        <TouchableOpacity onPress={handleEditPress} style={styles.editButton}>
          <Icon name='pencil' size={20} color='black' />
        </TouchableOpacity>
      </View>

      <CustomInput
        label='Name'
        placeholder='Enter your name'
        value={firstName}
        onChangeText={setFirstName}
        disabled={!isEditing}
        style={styles.customInput}
      />

      <CustomInput
        label='Email'
        placeholder='Enter your email'
        value={email}
        onChangeText={setEmail}
        disabled={!isEditing}
        keyboardType='email-address'
        style={styles.customInput}
      />

      {isEditing && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      )}

      <View style={styles.row}>
        <Text style={styles.rowLabel}>Help Center</Text>
      </View>
      <ProfileCard title={'FAQ'} />
      <ProfileCard title={'Contact Us'} />
      <ProfileCard title={'Privacy & Terms'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 16,
    paddingTop: 20,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '500',
    color: '#4F63AC',
    fontFamily: 'Montserrat',
  },
  input: {
    borderWidth: 1,
    borderColor: '#4F63AC',
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#4F63AC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  customInput: {
    color: '#4F63AC',
    width: '100%',
  },
  editButton: {
    marginLeft: 10,
    padding: 5,
  },
});

export default Settings;

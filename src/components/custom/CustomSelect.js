import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomSelect = ({
  label,
  placeholder,
  value,
  onSelect,
  options,
  style,
  disabled = false,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSelectOption = (option) => {
    onSelect(option);
    setIsModalVisible(false);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[
          styles.inputContainer,
          disabled && styles.disabledInputContainer,
        ]}
        onPress={handleToggleModal}
        disabled={disabled}>
        <Text style={styles.inputText}>{value || placeholder}</Text>
        <Icon
          name={isModalVisible ? 'caret-up' : 'caret-down'}
          size={20}
          color='#4F63AC'
        />
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        animationType='slide'
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {options.map(option => (
              <TouchableOpacity
                key={option}
                style={styles.option}
                onPress={() => handleSelectOption(option)}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '80%',
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '500',
    color: '#4F63AC',
    fontFamily: 'Montserrat',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#4F63AC',
    padding: 10,

    fontSize: 16,
    color: '#333',
    borderRadius: 10,
  },
  disabledInputContainer: {
    backgroundColor: '#EFEFEF',
  },
  inputText: {
    flex: 1,
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
  option: {
    paddingVertical: 8,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomSelect;

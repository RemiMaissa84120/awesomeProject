import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry = false,
  style,
  disabled = false,
  multiline = false,
  numberOfLines = 1,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          disabled && styles.disabledInputContainer,
        ]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={!isPasswordVisible ? secureTextEntry : false}
          style={[
            styles.input,
            disabled && styles.disabledInput,
            multiline && { height: 20 * numberOfLines }, // Hauteur dynamique pour les champs multi-lignes
          ]}
          editable={!disabled} // Champ de texte activé ou désactivé en fonction de la prop disabled
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.iconContainer}>
            <Icon
              name={!isPasswordVisible ? 'eye' : 'eye-slash'}
              size={20}
              color='#4F63AC'
            />
          </TouchableOpacity>
        )}
      </View>
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
    borderWidth: 1,
    borderColor: '#4F63AC',
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 16,
    color: '#333',
    borderRadius: 10,
  },
  disabledInputContainer: {
    backgroundColor: '#EFEFEF',
  },
  input: {
    flex: 1,
  },
  disabledInput: {
    color: '#888',
  },
  iconContainer: {
    padding: 5,
  },
});

export default CustomInput;

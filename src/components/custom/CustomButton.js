import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({
  title,
  onPress = () => {},
  filled = true,
  style = {},
  color = '#4F63AC',
}) => {
  const {
    button,
    filledButton,
    outlineButton,
    buttonText,
    filledButtonText,
    outlineButtonText,
  } = styles;

  const buttonStyle = filled ? filledButton : outlineButton;
  const textColor = filled ? filledButtonText : outlineButtonText;

  return (
    <TouchableOpacity
      style={[button, buttonStyle, style, { backgroundColor: color }]}
      onPress={onPress}>
      <Text style={[buttonText, textColor]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  filledButton: {
    backgroundColor: '#4F63AC',
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: '#4F63AC',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
  },
  filledButtonText: {
    color: 'white',
  },
  outlineButtonText: {
    color: '#4F63AC',
  },
});

export default CustomButton;

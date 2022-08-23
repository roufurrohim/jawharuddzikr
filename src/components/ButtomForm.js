/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Color from '../components/Colors';
import {windowWidth} from './../components/Dimentions';

const ButtonForm = ({label, ...rest}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        label === 'Simpan'
          ? {backgroundColor: Color.primary}
          : {
              backgroundColor: Color.white,
              borderWidth: 1,
              borderColor: Color.primary,
            },
      ]}
      {...rest}>
      <Text
        style={[
          styles.buttonText,
          label === 'Simpan' ? {color: Color.white} : {color: Color.primary},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonForm;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    width: windowWidth - 70,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
  },
});

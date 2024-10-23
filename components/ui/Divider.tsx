import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = ({ color = '#cccc', height = 1, marginVertical = 8 }) => (
  <View
    style={[
      styles.divider,
      { backgroundColor: color, height, marginVertical },
    ]}
  />
);

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});

export default Divider;
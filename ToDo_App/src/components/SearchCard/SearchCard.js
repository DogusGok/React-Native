import React, {useState} from 'react';
import {View, Button, Text, TextInput} from 'react-native';
import styles from './SearchCard.style';

const SearchCard = props => {
  const disabled = props.text.trim().length === 0;
  return (
    <View style={styles.container}>
      <TextInput
        value={props.text}
        onChangeText={props.setText}
        style={styles.textInput}
        placeholder="Yapılacak..."
        placeholderTextColor={'grey'}
      />
      <Button
        color={'orange'}
        title="Kaydet"
        onPress={props.setUpdate}
        disabled={disabled}
      />
    </View>
  );
};
export default SearchCard;

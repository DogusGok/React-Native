import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './CallCard.style';

const CallCard = props => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[isPressed ? styles.pressed_container : styles.container]}>
      <Text style={[isPressed ? styles.pressed_Text : styles.callText]}>
        {props.call.item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CallCard;

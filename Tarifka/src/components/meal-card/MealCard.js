import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealCard.style';

const MealCard = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onSelect}>
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: props.meal.strMealThumb}} />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {props.meal.strMeal}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default MealCard;

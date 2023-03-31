import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{uri: props.category.strCategoryThumb}}
        />
        <Text style={styles.title}>{props.category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CategoryCard;

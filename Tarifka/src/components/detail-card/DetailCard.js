import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: props.detail.strMealThumb}} />
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.detail.strMeal}</Text>
          <Text style={styles.area}>{props.detail.strArea}</Text>
        </View>

        <Text style={styles.instruciton}>{props.detail.strInstructions}</Text>
        <TouchableOpacity onPress={props.goLink} style={styles.button}>
          <Text style={styles.buttonText}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DetailCard;

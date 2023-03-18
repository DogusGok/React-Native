import React from 'react';
import {View, SafeAreaView, Text, FlatList, Image} from 'react-native';
import styles from './ProductsCard.style';
const ProductsCard = ({products}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: products.imgURL}} />
      <View>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {products.title}
        </Text>
        <Text>{products.price}</Text>
      </View>
      {products.inStock === false && (
        <Text style={styles.stock}>Stokta yok</Text>
      )}
    </SafeAreaView>
  );
};
export default ProductsCard;

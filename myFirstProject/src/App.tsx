/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  View,
} from 'react-native';
import ProductsCard from './components/ProductsCard';
import products_data from './products.json';
function App() {
  const render_products = ({item}) => <ProductsCard products={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.title}> PATIKASTORE </Text>
            <TextInput style={styles.input} placeholder="Ara..."></TextInput>
          </View>
        )}
        data={products_data}
        renderItem={render_products}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {color: 'purple', fontWeight: 'bold', fontSize: 25, marginBottom: 10},
  input: {backgroundColor: 'lightgray', borderRadius: 10},
  header: {margin: 10},
});
export default App;

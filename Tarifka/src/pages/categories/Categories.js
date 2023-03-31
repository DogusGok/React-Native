import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import styles from './Categories.style';
import axios from 'axios';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/categoire-card';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error';
const Categories = ({navigation}) => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const {error, loading, data} = useFetch(url);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <Error
        onClick={() => {
          navigation.navigate('Categories');
        }}></Error>
    );
  }
  const handleCategorySelect = id => {
    navigation.navigate('Meals', {id});
  };

  const renderCategories = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}></CategoryCard>
  );

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};
export default Categories;

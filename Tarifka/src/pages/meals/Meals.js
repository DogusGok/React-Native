import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import styles from './Meals.style';
import axios from 'axios';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import MealsCard from '../../components/meal-card';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';

const Meals = ({navigation, route}) => {
  const {id} = route.params;
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + id;

  const {error, loading, data} = useFetch(url);
  const handleMealSelect = id => {
    navigation.navigate('Detail', {id});
  };
  const renderMeals = ({item}) => (
    <MealsCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );
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

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};
export default Meals;

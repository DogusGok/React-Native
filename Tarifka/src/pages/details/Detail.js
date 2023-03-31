import React from 'react';
import {Button, FlatList, Linking} from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import DetailCard from '../../components/detail-card';
import Loading from '../../components/loading';

const Detail = ({navigation, route}) => {
  const {id} = route.params;
  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;

  const {error, loading, data} = useFetch(url);
  const watchYoutube = url => {
    Linking.openURL(url);
  };
  const renderDetail = ({item}) => (
    <DetailCard
      detail={item}
      goLink={() => {
        watchYoutube(item.strYoutube);
      }}
    />
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
    <FlatList
      style={styles.container}
      data={data.meals}
      renderItem={renderDetail}
    />
  );
};
export default Detail;

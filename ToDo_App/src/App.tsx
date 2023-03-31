/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CallCard from './components/CallCard';
import SearchCard from './components/SearchCard';

function App() {
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([]);
  const [data, setData] = useState('');
  function UpdateList() {
    setCounter(counter + 1);
    const task = {
      id: counter,
      title: data,
      isDeleted: false,
    };
    setList([...list, task]);
    setData('');
    console.log('====================================');
    console.log(task);
    console.log('====================================');
  }
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
      </View>
      <FlatList
        ListFooterComponentStyle={styles.footer}
        keyExtractor={item => item.id}
        data={list}
        renderItem={item => <CallCard call={item} />}
      />
      <SearchCard setUpdate={UpdateList} text={data} setText={setData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    padding: 5,
  },

  title: {
    color: '#ffa500',
    fontWeight: 'bold',
    fontSize: 34,
  },
  title_container: {margin: 10},
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;

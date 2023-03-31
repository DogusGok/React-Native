import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/categories';
import Meals from './pages/meals';
import Detail from './pages/details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'orange'},
            headerTintColor: 'orange',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'orange'},
            headerTintColor: 'orange',
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'orange'},
            headerTintColor: 'orange',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

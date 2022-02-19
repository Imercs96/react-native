import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Detail } from '../screens/Detail';
import { Movie } from '../interfaces/movie';

export type RootStackScreen = {
  Home: undefined;
  Detail: Movie
}

const Stack = createStackNavigator<RootStackScreen>();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                //backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="Home" component={ Home } />
      <Stack.Screen name="Detail" component={ Detail } />
    </Stack.Navigator>
  );
}
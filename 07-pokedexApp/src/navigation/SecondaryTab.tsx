import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Pokemon } from '../screens/Pokemon';
import { Search } from '../screens/Search';
import { RootStackScreen } from './Navigation';

const StackTwo = createStackNavigator<RootStackScreen>();

export const SecondaryTab = () => {
  return (
    <StackTwo.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
        <StackTwo.Screen name="Search" component={ Search } />
        <StackTwo.Screen name="Pokemon" component={ Pokemon } />
    </StackTwo.Navigator>  
  );
}
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Pokemon } from '../screens/Pokemon';
import { PokemonItem } from '../interfaces/pokemon';

//Parametrizamos el stack. Es una buena practica para saber si algun screen retorna informacion y de que tipo
export type RootStackScreen = {
    Home: undefined;
    Pokemon: { pokemonItem: PokemonItem, color: string };
    Search: undefined;
}

const Stack = createStackNavigator<RootStackScreen>();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white',
            }
        }}
    >
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Pokemon" component={ Pokemon } />
    </Stack.Navigator>  
  );
}
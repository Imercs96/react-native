import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PageOneScreen } from '../screens/PageOneScreen';
import { PageTwoScreen } from '../screens/PageTwoScreen';
import { PageThreeScreen } from '../screens/PageThreeScreen';
import { PersonScreen } from '../screens/PersonScreen';

//Defino que tipo de propiedades van a tener las pantallas mediante tipado estatico. Mayor seguridad y prolijidad
export type RootStackParams = {
  PageOneScreen: undefined
  PageTwoScreen: undefined
  PageThreeScreen: undefined
  PersonScreen: { id: number, name: string, country: string}
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //Propiedad que indica la pantalla de inicio de la app
      //initialRouteName='PageTwoScreen'
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="PageOneScreen" options={{ title: 'PageOneScreen' }}  component={ PageOneScreen } />
      <Stack.Screen name="PageTwoScreen" options={{ title: 'PageTwoScreen' }} component={ PageTwoScreen} />
      <Stack.Screen name="PageThreeScreen" options={{ title: 'PageThreeScreen' }} component={ PageThreeScreen } />
      <Stack.Screen name="PersonScreen" options={{ title: 'PersonScreen' }} component={ PersonScreen } />
    </Stack.Navigator>
  );
}
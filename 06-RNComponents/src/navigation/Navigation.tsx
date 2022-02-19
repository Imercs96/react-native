//React Modules
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Context
import { ThemeContext } from '../context/theme/ThemeContext';

//Screens
import { Alerts } from '../screens/Alerts';
import { Animation101 } from '../screens/Animation101';
import { Animation102 } from '../screens/Animation102';
import { ChangeTheme } from '../screens/ChangeTheme';
import { Home } from '../screens/Home';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen'
import { ModalScreen } from '../screens/ModalScreen'
import { PullToRefresh } from '../screens/PullToRefresh';
import { SectionListScreen } from '../screens/SectionList';
import { Slides } from '../screens/Slides';
import { SwitchScreen } from '../screens/Switch';
import { TextInputs } from '../screens/TextInput';

//Parametrizamos el stack. Es una buena practica para saber si algun screen retorna informacion y de que tipo
export type RootStackScreen = {
  Home: undefined;
  Animation101: undefined;
  Animation102: undefined;
  SwitchScreen: undefined;
  Alerts: undefined;
  TextInputs: undefined
  PullToRefresh: undefined,
  SectionListScreen: undefined
  Modal: undefined,
  InfiniteScroll: undefined,
  Slides: undefined,
  ChangeTheme: undefined
}

const Stack = createStackNavigator<RootStackScreen>();

export const Navigation = () => {
  const { theme } = useContext( ThemeContext )

  return (
    <NavigationContainer
      theme={ theme }
    >
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                //backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="Home" component={ Home } />
      <Stack.Screen name="Animation101" component={ Animation101 } />
      <Stack.Screen name="Animation102" component={ Animation102 } />
      <Stack.Screen name="SwitchScreen" component={ SwitchScreen } />
      <Stack.Screen name="Alerts" component={ Alerts } />
      <Stack.Screen name="TextInputs" component={ TextInputs } />
      <Stack.Screen name="PullToRefresh" component={ PullToRefresh } />
      <Stack.Screen name="SectionListScreen" component={ SectionListScreen } />
      <Stack.Screen name="Modal" component={ ModalScreen } />
      <Stack.Screen name="InfiniteScroll" component={ InfiniteScrollScreen } />
      <Stack.Screen name="Slides" component={ Slides } />
      <Stack.Screen name="ChangeTheme" component={ ChangeTheme } />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
import 'react-native-gesture-handler';
import React from 'react'
import { LogBox } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { Tabs } from './src/navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FavoritesProvider } from './src/context/FavoritesContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const AppState = ({ children }: any) => {
  return(
    <FavoritesProvider>
      { children }
    </FavoritesProvider>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <AppState>
        {/* <Navigation /> */}
        <Tabs />
      </AppState>
    </NavigationContainer>
  )
};

export default App;

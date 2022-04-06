import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { AuthProvider } from './src/context/AuthContext';
import { LogBox } from 'react-native';
import { ProductsProvider } from './src/context/ProductContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

//Para el tipado de AppState definimos los children como any, o bien como { children: JSX.Element | JSX.Element[] }
const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return(
    <AuthProvider>
      <ProductsProvider>
        { children }
      </ProductsProvider>
    </AuthProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
}

export default App
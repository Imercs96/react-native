import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { PermissionsProvider } from './src/context/Permissions';
import { LogBox } from 'react-native';

//Es ignorado ya que gesture-handler presenta inconsistencia con las ultimas versiones de RN
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const AppState = ({ children }: any) => {
  return(
    <PermissionsProvider>
      { children }
    </PermissionsProvider>
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
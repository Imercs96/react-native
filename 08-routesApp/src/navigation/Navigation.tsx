import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Map } from '../screens/Map';
import { Permissions } from '../screens/Permissions';
import { PermissionsContext } from '../context/Permissions';
import { Loading } from '../screens/Loading';

const Stack = createStackNavigator();

export const Navigation = () => {

  const { permissions } = useContext(PermissionsContext)

  if(permissions.locationStatus == 'unavailable') return <Loading />

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      { permissions.locationStatus == 'granted' ?
        <Stack.Screen name="Map" component={ Map } /> :
        <Stack.Screen name="Permissions" component={ Permissions } />
      }
    </Stack.Navigator>
  );
}

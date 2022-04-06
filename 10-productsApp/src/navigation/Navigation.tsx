//Native components and libraries
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Context API
import { AuthContext } from '../context/AuthContext';

//Navigator
import { ProductsNavigator } from './Products';

//Screens
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Protected } from '../screens/Protected';
import { Loading } from '../screens/Loading';

const Stack = createStackNavigator();

export const Navigation = () => {

  const { status } = useContext(AuthContext)

  if(status == 'checking') return <Loading />

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      {/* Condition for validate */}
      { status !== 'authenticated' ?
        <>
          <Stack.Screen name="Login" component={ Login } />
          <Stack.Screen name="Register" component={ Register } />
        </> :
        <>
          <Stack.Screen name="ProductsNavigator" component={ ProductsNavigator } />
          <Stack.Screen name="Protected" component={ Protected } />
        </>
      }
    </Stack.Navigator>
  );
}
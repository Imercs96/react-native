import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Navigation } from './Navigation';
import { Search } from '../screens/Search';
import { SecondaryTab } from './SecondaryTab';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#5856D6',
            tabBarLabelStyle: { marginBottom: (Platform.OS == 'android' ?  15 : 0) },
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                borderWidth: 0,
                elevation: 0,
                height: (Platform.OS == 'android' ?  70 : 80)
            }
        }}
        sceneContainerStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen 
        options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
                <Icon name='list-outline' size={ 20 } color={ color } />
            )
        }}
        name="Navigation" component={ Navigation } />
      <Tab.Screen 
        options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color }) => (
                <Icon name='search-outline' size={ 20 } color={ color } />
            )
        }}
        name="SecondaryTab" component={ SecondaryTab } />
    </Tab.Navigator>
  );
}
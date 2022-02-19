import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

// Configuracion para hacer desaparecer el warning de la version del Animated
import { LogBox, Text } from 'react-native';
import { colours } from '../theme/appTheme';
LogBox.ignoreLogs(['Sending'])

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colours.white
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colours.primary,
        tabBarIndicatorStyle: {
          backgroundColor: colours.primary
        },
        tabBarShowIcon: true,
        tabBarStyle: { 
          borderTopColor: colours.primary,
          shadowColor: colours.transparent,
          elevation: 0,
        },
        tabBarIcon: ({ focused, color }) => {
            let iconName : string = ''

            switch(route.name) {
                case 'Chat':
                  iconName = 'chatbubbles-outline' 
                break
                case 'Contacts':
                  iconName = 'people-outline' 
                break
                case 'Settings':
                  iconName = 'settings-outline' 
                break
            }
            return (
                <Icon name={ iconName } size={ 22 } color={ color } />
            )
        }
    })}
    >
      <Tab.Screen name="Chat" component={ ChatScreen } />
      <Tab.Screen name="Contacts" component={ ContactsScreen } />
      <Tab.Screen name="Settings" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}


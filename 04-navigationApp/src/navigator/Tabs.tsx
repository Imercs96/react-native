import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOneScreen } from '../screens/TabOneScreen';
import { TabTwoScreen } from '../screens/TabTwoScreen';
import { StackNavigator } from './StackNavigator';
import { colours } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator'

export const Tabs
 = () => {
    return Platform.OS == 'ios' ? <TabsIOS/> : <TabsAndroid/>
}

const BottomTabAndroid = createBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName : string = ''

                switch(route.name) {
                    case 'TabOneScreen':
                        iconName = 'logo-apple' 
                    break
                    case 'TabTwoScreen':
                        iconName = 'logo-android' 
                    break
                    case 'StackNavigator':
                        iconName = 'logo-amazon' 
                    break
                }

                return <Icon name={ iconName } size={ 30 } color={colours.white} />
            },
            tabBarActiveTintColor : colours.white,
            tabBarStyle: { 
                borderTopColor: colours.primary,
                borderTopWidth: 2,
                elevation: 0,
                backgroundColor: colours.primary,
            },
            tabBarInactiveTintColor: colours.gray
        })}
        sceneContainerStyle={{
            backgroundColor: colours.white,
            borderTopColor: colours.primary
        }}
    >
        {/* Insercion de iconos renderizando un JSX */}
        {/* <Tab.Screen name="TabOneScreen" options={{ title: 'TabOne', tabBarIcon: (props) => <Text style={{ color: props.color }}> T1 </Text>}} component={ TabOneScreen } /> */}

        <BottomTabAndroid.Screen name="TabOneScreen" options={{ title: 'TabOne'}} component={ TabOneScreen } />
        <BottomTabAndroid.Screen name="TabTwoScreen" options={{ title: 'TopTabNavigator' }} component={ TopTabNavigator } />
        <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName : string = ''

                switch(route.name) {
                    case 'TabOneScreen':
                        iconName = 'logo-apple' 
                    break
                    case 'TabTwoScreen':
                        iconName = 'logo-android' 
                    break
                    case 'StackNavigator':
                        iconName = 'logo-amazon' 
                    break
                }

                return <Icon name={ iconName } size={ 30 } color='#2E2E2E' />
            },
            tabBarActiveTintColor : colours.primary,
            tabBarStyle: { 
                borderTopColor: colours.primary,
                borderTopWidth: 2,
                elevation: 0,
            }
        })}
        sceneContainerStyle={{
            backgroundColor: 'white',
            borderTopColor: colours.primary
        }}
    >
        {/* Insercion de iconos renderizando un JSX */}
        {/* <Tab.Screen name="TabOneScreen" options={{ title: 'TabOne', tabBarIcon: (props) => <Text style={{ color: props.color }}> T1 </Text>}} component={ TabOneScreen } /> */}

        <BottomTabIOS.Screen name="TabOneScreen" options={{ title: 'TabOne' }} component={ TabOneScreen } />
        <BottomTabAndroid.Screen name="TabTwoScreen" options={{ title: 'TopTabNavigator' }} component={ TopTabNavigator } />
        <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}
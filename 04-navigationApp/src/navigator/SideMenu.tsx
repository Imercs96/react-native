import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

//Nos proporciona la funcionalidad y el corrimiento del top del componente SafeAreaView. Solo queda a modo de repsado. no lo vamos a usar.
// const Stack =  createStackNavigator()
// const SettingStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name='SettingsScreen'
//         component={ SettingsScreen }
//       />
//     </Stack.Navigator>
//   )
// }

export const SideMenu = () => {

  const { width } = useWindowDimensions()
  
  return (
    <Drawer.Navigator
      drawerContent={ props => <InternalMenu { ...props } />}

      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
          //drawerPosition: 'right'
      }}
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const InternalMenu = ({ navigation } : DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>

      {/* Icon profile Avatar */}
      <View style={ styles.avatarContainer }>
        <Image
          source={{
            uri: 'https://www.nicepng.com/png/detail/202-2024580_png-file-profile-icon-vector-png.png'
          }}
          style= { styles.avatar }
        />
      </View>
        
      {/* Opciones de Menu */}
      <View style={ styles.menuContainer }>
        <TouchableOpacity 
          style={ styles.menuButton }
          onPress={() => navigation.navigate('Tabs')}
        >
          <Text style={ styles.menuText }> Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={ styles.menuButton }
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={ styles.menuText }> Settings </Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}
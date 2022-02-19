import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';

//Creo una interface que me pertime extender las Props del Stack para podes usar Typescript y tener tipado estatico. mas facil para visualizar las props
//interface Props extends StackScreenProps<any, any> {};

//Creo una interface que me pertime extender las Props del Drawer para podes usar Typescript y tener tipado estatico. mas facil para visualizar las props
interface Props extends DrawerScreenProps<any, any> {};

export const PageOneScreen = ({ navigation } : Props) => {

    useEffect(() => {
        navigation.setOptions({
            //title: 'Navigation App',
            //headerBackTitle: '',
            headerLeft: () => (
                <TouchableOpacity 
                    style={{ flexDirection : 'row' }}
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Icon name="menu-outline" size={ 30 } color="#232323"/>
                    <Text> Menu </Text>
                </TouchableOpacity>
            )
        })
    }, [ ])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> PageOneScreen </Text>
            <Button 
                title= 'Go to page two'
                onPress={ () => navigation.navigate('PageTwoScreen') }
            />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{...styles.bigButton, backgroundColor: '#FF9427' }}
                    onPress={ () => navigation.navigate('PersonScreen', {
                        id: 1,
                        name: 'Peter',
                        country: 'France'
                    }) }
                >
                    <Text style={ {...styles.bigButtonText, color: 'black' }}> Peter's page </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{...styles.bigButton, backgroundColor: '#5856D6' }}
                    onPress={ () => navigation.navigate('PersonScreen', {
                        id: 2,
                        name: 'Maria',
                        country: 'USA'
                    }) }
                >
                    <Text style={ styles.bigButtonText }> Maria's page </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

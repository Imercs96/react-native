import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

//Creo una interface que me pertime extender las Props del Stack para podes usar Typescript y tener tipado estatico. mas facil para visualizar las props
interface Props extends StackScreenProps<any, any> {};

export const PageThreeScreen = ({ navigation } : Props) => {

    useEffect(() => {
        navigation.setOptions({
            title: 'Navigation App',
            headerBackTitle: ''
        })
    }, [ ])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> PageThreeScreen </Text>
            <Button 
                title= 'Go back'
                onPress={ () => navigation.pop() }
            />
            <Button 
                title= 'Go back to page one'
                onPress={ () => navigation.popToTop() }
            />
        </View>
    )
}

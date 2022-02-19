import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const PageTwoScreen = () => {

    //Como alternativa, puedo usar este hook para extraer las props. Es super eficiente, pero mejor practica es con Interface
    const navigator = useNavigation<any>()

    useEffect(() => {
        navigator.setOptions({
            title: 'Navigation App',
            headerBackTitle: ''
        })
    }, [ ])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> PageTwoScreen </Text>
            <Button 
                title= 'Go to page three'
                onPress={ () => navigator.navigate('PageThreeScreen') }
            />
        </View>
    )
}

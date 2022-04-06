import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const Logo = () => {
    return (
        <View style={ styles.logoContainer }>
            <Image source={ require('../assets/react-logo-white.png')} style={ styles.logo }/>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center'
    },
    logo: {
        width: 110,
        height: 100
    }
});
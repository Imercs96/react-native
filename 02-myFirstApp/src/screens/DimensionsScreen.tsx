import React from 'react'
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'

//Extraigo el width y height de manera fija, no se modifica el valor si tiene landscape
// const { width, height } = Dimensions.get('window')

export const DimensionsScreen = () => {

    //Este hook, tiene la particularidad que obtiene el valor de la modificacion del valor landscapte
    const { width, height } = useWindowDimensions()

    return (
        <View>
            <View style={styles.container}>
                <View style={{...styles.orangeBox, width: width * 0.7}}/>
                <View style={{...styles.purpleBox, width: width * 0.3}}/>
            </View>
            <View>
                <Text style={styles.title}>W: { width } y H: { height }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 600,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        width: '50%',
        height: '50%'
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        width: '50%',
        height: '50%'
    },
    title: {
        fontSize: 25,
        textAlign: 'center'
    }
}); 
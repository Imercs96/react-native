import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.orangeBox}/>
            <View style={styles.purpleBox}/>
            <View style={styles.greenBox}/>
            <View style={styles.grayBox}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: 400,
        // height: 400,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2BC4D9'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right:0
    },
    greenBox: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    grayBox: {
        backgroundColor: 'gray',
        // width: 100,
        // height: 100,
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // top: 0,
        // left: 0,
        ...StyleSheet.absoluteFillObject
    }
});

//StyleSheet.absoluteFillObject, es un shortcut que me provee estos datos:
// {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
//}
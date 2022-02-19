import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const HomeworkScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpleBox}/>
            <View style={styles.orangeBox}/>
            <View style={styles.blueBox}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
        justifyContent: 'center',
        //alignContent: 'center'
        flexDirection: 'row',
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        width: 100,
        height: 100,
        //height: '100%',
        //alignItems: 'stretch',
        alignSelf: 'center',
        bottom: 50
        //alignSelf: 'flex-start'
        //flex: 1
        //justifyContent: 'center'
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        width: 100,
        height: 100,
        //left: '60%'
        //alignSelf: 'flex-end'
        //height: '100%',
        alignSelf: 'center'
        //flex: 1,
    },
    blueBox: {
        backgroundColor: '#2BC4D9',
        borderWidth: 10,
        borderColor: 'white',
        width: 100,
        height: 100,
        alignSelf: 'center',
        bottom: 50
        //height: '100%',
        //alignItems: 'stretch',
        //alignSelf: 'stretch'
        //alignSelf: 'flex-start'
        //flex: 2
    },
});
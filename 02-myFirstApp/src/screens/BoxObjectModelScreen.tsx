import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.conatainer}>
            <Text style={styles.title}> Box Object Model </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: 'red'
    },
    title: {
        fontSize: 20,
        width: 200,
        borderWidth: 10,
        paddingHorizontal: 30,
        paddingVertical: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white'
    }
});
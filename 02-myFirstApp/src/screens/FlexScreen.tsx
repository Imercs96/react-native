import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}> Box 1 </Text>
            <Text style={styles.box2}> Box 2 </Text>
            <Text style={styles.box3}> Box 3 </Text>
            <Text style={styles.box4}> Box 4 </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2BC4D9',
        //flexDirection: 'row',
        //justifyContent: 'flex-end',
        //alignItems: 'flex-end'
        alignItems: 'flex-start'
    },
    box1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'center'
        //flex: 3
    },
    box2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-end'
        //flex: 2
    },
    box3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-start'
        //flex: 3
    },
    box4: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'center'
        //flex: 2
    }
});
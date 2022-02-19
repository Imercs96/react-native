import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { FloatingActionButton } from '../components/FloatingActionButton'

export const CounterScreen = () => {
    const [counter, setCounter] = useState(10)
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Contador: { counter } </Text>

            <FloatingActionButton 
                title='+1'
                position='br'
                onPress={() => setCounter(counter + 1)}
            />
            <FloatingActionButton 
                title='-1'
                position='bl'
                onPress={() => setCounter(counter - 1)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center'
    },
    fabLocationBR: {
        position:'absolute',
        bottom: 25,
        right: 25,
    },
    fabLocationBL: {
        position:'absolute',
        bottom: 25,
        left: 25,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
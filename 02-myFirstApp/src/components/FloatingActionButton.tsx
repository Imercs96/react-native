import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TouchableNativeFeedback, Platform } from 'react-native'

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}
export const FloatingActionButton = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.75 }
                onPress={onPress}
                style={[styles.fabLocation, position !== 'br' ? styles.left : styles.right]}
            >
                <View style={styles.fab}> 
                    <Text style={styles.fabText}> { title } </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={[styles.fabLocation, position !== 'br' ? styles.left : styles.right]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425C', false, 30)}
                >
                    <View style={styles.fab}> 
                        <Text style={styles.fabText}> { title } </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
    return (Platform.OS !== 'ios' ? android() : ios())
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
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    fabLocation: {
        position:'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
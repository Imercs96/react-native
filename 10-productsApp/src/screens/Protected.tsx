import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const Protected = () => {

    const { user, token, logOut } = useContext(AuthContext)

    return (
        <View style={ styles.container }>
            <Text style={ styles.text }> Protected Screen </Text>

            <TouchableOpacity
                style={ styles.button }
                activeOpacity={ 0.7 }
                onPress={ logOut }
            >
                <Text style={ styles.buttonText }>Logout</Text>
            </TouchableOpacity>

            <Text style={ styles.text }> { JSON.stringify({ user, token }, null, 5) } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        marginBottom: 20
    },
    button: {
        fontSize: 20,
        borderColor: '#5857D6',
        borderWidth: 2,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        color: 'black',
        alignSelf: 'center',
        padding: 10
    }
});
import React from 'react'
import { StyleProp, ViewStyle, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
    title: string;
    onPress: () => void;
    style: StyleProp<ViewStyle>
}

export const ButtonPermission = ({ title, onPress, style = { } }: Props) => {
  return (
    <TouchableOpacity
        activeOpacity={ 0.7 }
        onPress={ onPress }
        style={{ 
            ...style as any,
            ...styles.button
        }}
    >
        <Text style={ styles.buttonText }> { title } </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        height: 45,
        width: 200,
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        elevation: 6
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});

import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
    text: string,
    background?: string
    color?: string
    biggerButton?: boolean,
    onPress: (date: string) => void
}

export const ButtonCalculator = ({ text, background, color, biggerButton, onPress }: Props) => {
    return (
        <TouchableOpacity activeOpacity={ 0.75 } onPress={() => onPress(text)}>
            <View style={{...styles.button, 
                backgroundColor: background ? background : '#2D2D2D',
                width: biggerButton ? 180 : 80
            }} >
                <Text style={{...styles.content, color: color ? color : 'white' }}> { text } </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    content: {
        alignSelf: 'center',
        fontSize: 30,
        padding: 10,
        fontWeight: '400'
    }
});
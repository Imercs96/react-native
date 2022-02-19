import React from 'react'
import { View, StyleProp, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

export const FloatingActionButton = ({ iconName, onPress, style }: Props) => {
    return (
        <View style={{ ...style as any }}>
            <TouchableOpacity
                activeOpacity={ 0.7 }
                onPress={ onPress }
                style={ styles.button }
            >
                <Icon 
                    name={ iconName }
                    size={ 35 }
                    color={ 'white' }
                    style={{ left: 1 }}
                />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        zIndex: 999,
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        //For Android
        elevation: 6
    }
});
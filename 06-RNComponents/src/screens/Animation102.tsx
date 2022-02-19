import React, { useContext } from 'react';
import { Animated, Button, StyleSheet, View, Text } from 'react-native';

import { ThemeContext } from '../context/theme/ThemeContext';

import { useAnimation } from '../hooks/useAnimation';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Animation102 = () => {

    const { opacity, position, fadeIn, fadeOut, startPosition } = useAnimation()
    const { theme: { colors } } = useContext( ThemeContext )

    return(
        <View style={ styles.container }>
            <Animated.View style={{ 
                ...styles.purpleBox, 
                opacity, 
                transform: [{
                    translateY: position
                }] 
            }}/>
            <TouchableOpacity 
                onPress={ () => { 
                    fadeIn(); 
                    startPosition(-150)
                }}
                style={{ ...styles.button, backgroundColor: colors.primary }}
                activeOpacity={ 0.7 }
            >
                <Text style={{ color: colors.background, textAlign: 'center' }}> Fade In </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                onPress={ fadeOut }
                style={{ ...styles.button, backgroundColor: colors.primary }}
            >
                <Text style={{ color: colors.background, textAlign: 'center' }}> Fade Out </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#8F9DA8',
        width: 150,
        height: 150,
        marginBottom: 20
    },
    button: {
        marginVertical: 5,
        borderRadius: 10,
        height: 40,
        width: 75,
        justifyContent: 'center'
    }
});
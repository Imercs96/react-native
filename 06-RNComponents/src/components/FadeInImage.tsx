import React from 'react';
import { ActivityIndicator, View, Animated, StyleProp, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style } : Props) => {

    const { opacity, fadeIn } = useAnimation()
    const [ isLoading, setIsLoading ] = useState(false)
    const { theme: { colors } } = useContext( ThemeContext )

    const finishLoading = () => {
        setIsLoading(!isLoading);
        fadeIn()
    }

    return(
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            { isLoading ? 
                <ActivityIndicator style={{ position: 'absolute'}} color={ colors.primary } size={ 25 }/> 
            : null }
            
            <Animated.Image 
                source={{ uri }}
                onLoadEnd={ finishLoading }
                style={{ ...style as any, opacity }}
            />
        </View>
    );
};

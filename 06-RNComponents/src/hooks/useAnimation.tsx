import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0.4)).current
    const position = useRef(new Animated.Value(-150)).current

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start()
    }

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0.2,
            duration: 500,
            useNativeDriver: true
        }).start()

        Animated.timing(position, {
            toValue: -150,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.bounce
        }).start()
    }

    const startPosition = (initPosition: number, duration?: number) => {
        position.setValue(initPosition)

        Animated.timing(position, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.ease
        }).start()
    }


    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startPosition
    };
};

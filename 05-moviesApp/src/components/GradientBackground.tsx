import React, { useContext } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/Gradient';
import { useFade } from '../hooks/useFade';
import { useEffect } from 'react';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {

    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);

    const { opacity, fadeIn, fadeOut } = useFade()

    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut()
        })
    }, [ colors ]);
    

    return (
        <View style={{ flex: 1 }}>
            {/* Configuracion del gradiente */}
            <LinearGradient 
                colors={[ prevColors.primary, prevColors.secondary, prevColors.tertiary, 'white' ]}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.5 }}
            />

            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity}}
            >
                <LinearGradient 
                    colors={[ colors.primary, colors.secondary, colors.tertiary, 'white' ]}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.5 }}
                />
            </Animated.View>
            { children }
        </View>
    );
};

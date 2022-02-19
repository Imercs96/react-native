import React, { createContext, useEffect, useReducer } from 'react';
import { Appearance, AppState, useColorScheme } from 'react-native';
import { ThemeState, ThemeReducer, lightTheme, darkTheme } from './ThemeReducer';

interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: any) => {

    //Hook para IOS
    //const colorScheme = useColorScheme()

    const [ theme, dispatch ] = useReducer(ThemeReducer, 
            ( Appearance.getColorScheme() == 'dark' ? darkTheme : lightTheme ));

    // Esto solo funciona en IOS
    // useEffect(() => {
    //     colorScheme == 'dark' ? setDarkTheme() : setLightTheme()
    // }, [ colorScheme ]);

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if(status == 'active') {
                Appearance.getColorScheme() == 'dark' ? setDarkTheme() : setLightTheme
            }
        })
    }, [ ]);
    

    const setDarkTheme = () => dispatch({ type: 'set_dark_theme' })
    const setLightTheme = () => dispatch({ type: 'set_light_theme' })

    return(
        <ThemeContext.Provider
            value={{ theme, setDarkTheme, setLightTheme }}
        >
            { children }
        </ThemeContext.Provider>
    )
}
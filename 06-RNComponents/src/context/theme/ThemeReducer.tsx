import { Theme } from "@react-navigation/native"

type ThemeAction = 
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme'}

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'rgba(143, 157, 168, 0.4)',
    dark: false,
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'grey',
        text: 'black',
        border: 'orange',
        notification: 'yellow',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dividerColor: 'rgba(143, 157, 168, 0.4)',
    dark: true,
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'grey',
        text: 'white',
        border: 'orange',
        notification: 'teal',
    }
}

export const ThemeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return { ...lightTheme }
        case 'set_dark_theme':
            return { ...darkTheme }
        default:
            return state;
    }
}
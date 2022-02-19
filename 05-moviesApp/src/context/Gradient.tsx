import React, { createContext, useState } from 'react';

interface ImageColors {
    primary: string;
    secondary: string;
    tertiary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void; 
    setPrevMainColors: (colors: ImageColors) => void; 
}

export const GradientContext = createContext({} as ContextProps)

export const GradientProvider = ({ children }: any) => {

    //Colores actuales
    const [ colors, setColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
        tertiary: 'transparent'
    });

    //Colores anteriores
    const [ prevColors, setPrevColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
        tertiary: 'transparent'
    });

    //Defino funciones que me permitar retornar la funcion de actualizacion de estado
    const setMainColors = (colors: ImageColors) => setColors(colors)
    const setPrevMainColors = (colors: ImageColors) => setPrevColors(colors)
    
    return(
        <GradientContext.Provider value={{ 
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}>
            { children }
        </GradientContext.Provider>
    )
}
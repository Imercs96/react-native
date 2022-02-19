import React, { createContext, useReducer } from "react"
import { authReducer } from './authReducer';

//Definir la informacion de nuestro store
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Initial state
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

//Se usa para indicarle a React como luce y que informacion debe exporner el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void
    changeFavouriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

//Componente proveedor de estado
export const AuthProvider = ({ children }: any ) => {

    const [ authState, dispatch ] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const logOut = () => {
        dispatch({ type: 'logOut' })
    }

    const changeFavouriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavouriteIcon', payload: iconName })
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn, 
            logOut,
            changeFavouriteIcon,
            changeUsername
        }}>
            { children }
        </AuthContext.Provider>
    )
}

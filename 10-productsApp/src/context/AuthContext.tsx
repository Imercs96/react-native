import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import productsAPI from '../api/products';
import { User, LoginData, LoginResponse, RegisterData } from '../interfaces/appInterfaces';

import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: (registerData: RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {
    
    const [ state, dispatch ] = useReducer(authReducer, authInitialState)

    useEffect(() => {
        checkToken()
    }, [])
    
    const checkToken = async () => {
        try {
            const user_token = await AsyncStorage.getItem('@user_token')
    
            //Not token, not authenticated
            if(!user_token) return dispatch({ type: 'notAuthenticated' })
    
            const response = await productsAPI.get('/auth')
            const { status, data: { usuario, token }} = response

            if(status !== 200) return dispatch({ type: 'notAuthenticated' })

            //Set new JSON Web Token in asyncStorage
            await AsyncStorage.setItem('@user_token', token)
    
            dispatch({
                type: 'signUp',
                payload: { token, user: usuario }
            })

        } catch (error) {
            console.error(error)
        }
    }
 
    const signIn = async ({ correo, password }: LoginData) => {
        try {
            const response = await productsAPI.post<LoginResponse>('/auth/login', { correo, password })
            const { token, usuario } = response.data
            dispatch({
                type: 'signUp',
                payload: { token, user: usuario }
            })

            await AsyncStorage.setItem('@user_token', token)
            
        } catch (error) {
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Incorrect Information'
            })
        }
    }
    
    const removeError = () =>  dispatch({ type: 'removeError' })

    const signUp = async ({ nombre, correo, password }: RegisterData) => {
        try {
            const response = await productsAPI.post<LoginResponse>('/usuarios', 
            { nombre, correo, password })
            const { data: { token, usuario } } = response

            dispatch({ type: 'signUp', payload: { token, user: usuario }})
            await AsyncStorage.setItem('@user_token', token)

        } catch(error) {
            dispatch({
                type: 'addError',
                payload: error.response.data.errors[0].msg || 'Check the information'
            })
        }

    }

    const logOut = async () => {
        await AsyncStorage.removeItem('@user_token')
        dispatch({ type: 'logout' })
    }

    return(
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError
        }}>
            { children }
        </AuthContext.Provider>
    )
}
import React from "react";
import { createContext, useReducer, useState } from "react";
import { PokemonItem } from "../interfaces/pokemon";
import { FavoritesReducer } from "./FavoritesReducer";

//Initial State
export interface FavoritesState {
    favorites: PokemonItem[]
}
const initialState: FavoritesState = {
    favorites: []
}

//Context
interface FavoritesContextProps {
    favorites: FavoritesState
    addFavorite: (item: PokemonItem) => void
    removeFavorite: (id: string) => void
}

export const FavoritesContext = createContext({} as FavoritesContextProps)

//Provider
interface Props {
    children: JSX.Element | JSX.Element[]
}

export const FavoritesProvider = ({ children }: Props ) => {

    const [ favorites, dispatch ] = useReducer(FavoritesReducer, initialState)

    //Add Favorites
    const addFavorite = (item: PokemonItem) => dispatch({ type: 'addFavorite', payload: item })
    //Remove Favorites
    const removeFavorite = (id: string) => dispatch({ type: 'removeFavorite', payload: { id }})


    return(
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite,
            removeFavorite
        }}>
            { children }
        </FavoritesContext.Provider>
    )
}
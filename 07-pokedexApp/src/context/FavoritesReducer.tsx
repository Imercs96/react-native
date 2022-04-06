import { PokemonItem } from "../interfaces/pokemon";
import { FavoritesState } from "./FavoritesContext";

type FavoritesAction =
    | { type: 'addFavorite', payload: PokemonItem }
    | { type: 'removeFavorite', payload: { id: string } }

export const FavoritesReducer = (state: FavoritesState, action: FavoritesAction) => {

    switch (action.type) {
        case 'addFavorite':
            return {
                ...state,
                favorites: [ ...state.favorites, action.payload ]
            }

        case 'removeFavorite':
            return {
                ...state,
                favorites: state.favorites.filter(({ id }) => id !== action.payload.id)
            }
        
        default:
            return state;
    }

}
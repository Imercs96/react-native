import { useEffect, useState } from 'react';
import { FullResponsePokemonItem } from '../interfaces/pokemon';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemon = (id: string) => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ pokemonDetails, setPokemonDetails ] = useState<FullResponsePokemonItem>({} as FullResponsePokemonItem);

    const getPokemonInfo = async() => {
        const response = await pokemonApi.get<FullResponsePokemonItem>(`https://pokeapi.co/api/v2/pokemon/${ id }`)
        setPokemonDetails(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getPokemonInfo()
    }, []);
    

    return {
        isLoading,
        pokemonDetails
    }
};

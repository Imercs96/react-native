import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, PokemonItem, Result } from '../interfaces/pokemon';

export const usePokemonPagination = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ pokemonList, setPokemonList ] = useState<PokemonItem[]>([]);

    //Referencia a la API que actua como infinite scroll
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

    //Extraccion de lista de Pokemones por paginacion
    const loadPokemons = async() => {
        const response = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current)
        const { data } = response
        nextPageUrl.current = data.next

        pokemonListResponse(data.results)
    }

    //Genera una lista con la informacion basica de cada Pokemon
    const pokemonListResponse = (pokemon: Result[]) => {
        const pokemonListPagination: PokemonItem[] = pokemon.map(({ name, url }) => {

            //Extraccion del id del Pokemon
            const urlSpliPath = url?.split('/')
            const id = urlSpliPath && urlSpliPath[ urlSpliPath.length - 2 ]
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`

            return {  name, id, picture }
        })

        setPokemonList([ ...pokemonList, ...pokemonListPagination ])
        setIsLoading(false)
    }

    useEffect(() => {
        loadPokemons()
    }, []);
    
    return{
        pokemonList,
        isLoading,
        loadPokemons
    };
};

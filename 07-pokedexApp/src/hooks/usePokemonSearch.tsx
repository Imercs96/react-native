import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, PokemonItem, Result } from '../interfaces/pokemon';

export const usePokemonSearch = () => {

    const [ isFetching, setIsFetching ] = useState(true);
    const [ pokemonList, setPokemonList ] = useState<PokemonItem[]>([]);

    //Extraccion de lista de Pokemones por paginacion
    const loadPokemons = async() => {
        const response = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200')
        const { data } = response

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

        setPokemonList(pokemonListPagination)
        setIsFetching(false)
    }

    useEffect(() => {
        loadPokemons()
    }, []);
    
    return{
        pokemonList,
        isFetching,
        loadPokemons
    };
};

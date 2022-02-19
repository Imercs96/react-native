import React from 'react'
import { View, Text, Platform, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';

import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { PokemonItem } from '../interfaces/pokemon';

export const Search = () => {

    const widthScreen = Dimensions.get('window').width
    const { top } = useSafeAreaInsets()
    const { isFetching, pokemonList } = usePokemonSearch()

    const [ pokemonFiltered, setPokemonFiltered ] = useState<PokemonItem[]>([])
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        if(search.length < 1) return setPokemonFiltered([])

        if(!Number(search)) 
            setPokemonFiltered(pokemonList?.filter(e => 
                e.name.toLowerCase().includes(search.toLowerCase())
            )) 
        else {
            const pokemonById = pokemonList?.find(e => e.id == search)
            setPokemonFiltered( pokemonById ? [ pokemonById ] : [])
        }
    }, [ search ])
    

    if(isFetching) return <Loading />
    
    return (
        <View style={{ ...stylesScreen.container }}> 
            <SearchInput 
                onDebouce={ setSearch }
                style={{ 
                ...stylesScreen.searchInput, 
                width: widthScreen - 40,
                top: (Platform.OS == 'ios' ? top : top + 10)
                }}
            />

            <FlatList 
                data={ pokemonFiltered }
                keyExtractor={(pokemon) => pokemon.id }
                numColumns={ 2 }
                renderItem={({ item }) => ( <PokemonCard pokemon={ item } /> )}

                //Header
                ListHeaderComponent={() => <Text 
                    style={{
                        ...styles.globalMargin, 
                        ...styles.title, 
                        marginTop: (Platform.OS == 'ios' ? top + 60 : top + 80),
                        paddingBottom: 10 }}
                > { search } </Text>}

                //Infinity Scroll
                showsVerticalScrollIndicator={ false }
            />
        </View>
  )
}

const stylesScreen = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    searchInput: {
        position: 'absolute',
        zIndex: 9
    }
});
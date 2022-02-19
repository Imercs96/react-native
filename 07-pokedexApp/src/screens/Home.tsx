import React from 'react';
import { Image, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { usePokemonPagination } from '../hooks/usePokemonPagination';
import { PokemonCard } from '../components/PokemonCard';
import { styles } from '../theme/appTheme';

export const Home = () => {
    const { top } = useSafeAreaInsets()

    const { isLoading, pokemonList, loadPokemons } = usePokemonPagination()

    return(
        <View>
            <Image 
                source={ require('../assets/pokeball-black.png') }
                style={ styles.backgroundPokeball }
            />

            <View style={{ alignItems: 'center' }}>
                <FlatList 
                    data={ pokemonList }
                    keyExtractor={(pokemon) => pokemon.id }
                    numColumns={ 2 }
                    renderItem={({ item }) => ( <PokemonCard pokemon={ item }/> )}
                    //Header
                    ListHeaderComponent={() => <Text 
                        style={{...styles.globalMargin, ...styles.title, top: top + 20, marginBottom: top + 20, paddingBottom: 20 }}
                    > Pokedex </Text>}

                    //Infinity Scroll
                    showsVerticalScrollIndicator={ false }
                    onEndReached={ loadPokemons }
                    onEndReachedThreshold={ 0.4 }

                    //Footer
                    ListFooterComponent={() => 
                        <ActivityIndicator  style={{ height: 100 }} size={ 30 } color={ 'grey' }/>}
                />
            </View>
        </View>
    )
};

import React, { useContext, useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

import { FavoritesContext } from '../context/FavoritesContext';
import { styles } from '../theme/appTheme';
import { PokemonItem } from '../interfaces/pokemon';
import Icon from 'react-native-vector-icons/Ionicons';

export const Favorites = () => {

    const { favorites: { favorites }, removeFavorite } = useContext(FavoritesContext)
    const { top } = useSafeAreaInsets()
    const [ selectedOption, setSelectedOption ] = useState<string>('A-Z');
    const [ sortFavorites, setSortFavorites ] = useState<PokemonItem[]>([]);

    const renderItem = ({ id, name, picture }: PokemonItem) => {
        return (
            <View style={ stylesFavorites.container }>
                <View style={ stylesFavorites.wrap }>
                    <Image style={ stylesFavorites.image } source={{ uri: picture }}/>
                    <Text style={ stylesFavorites.text }>#{ id }</Text>
                    <Text style={ stylesFavorites.text }>{ name }</Text>
                </View>
                <TouchableOpacity 
                    style={ stylesFavorites.removeIcon }
                    onPress={() => removeFavorite(id)}
                >
                    <Icon name='trash-outline' size={ 20 } color={ 'grey' } />
                </TouchableOpacity>
            </View>

        )
    }
    
    const orderBy = ([ ...favorites ]: PokemonItem[], selectedOption: string) => {
        if(selectedOption == 'A-Z') {
            const results = favorites?.sort((a: PokemonItem, b: PokemonItem) => {
                return a?.name?.localeCompare(b?.name)
            })
            setSortFavorites(results)
        }
        if(selectedOption == 'Z-A') {
            const results = favorites?.sort((a: PokemonItem, b: PokemonItem) => {
                return b?.name?.localeCompare(a?.name)
            })
            setSortFavorites(results)
        }
        if(selectedOption == 'Lower-Ids') {
            const results = favorites?.sort((a: PokemonItem, b: PokemonItem) => {
                return Number(a?.id) - Number(b?.id)
            })
            setSortFavorites(results)
        }
        if(selectedOption == 'Higher-Ids') {
            const results = favorites?.sort((a: PokemonItem, b: PokemonItem) => {
                return Number(b?.id) - Number(a?.id)
            })
            setSortFavorites(results)
        }
    }

    useEffect(() => {
        orderBy(favorites, selectedOption)
    }, [ favorites, selectedOption ])


    return (
        <View style={{ top: top + 20 }}>
            <Text style={{ ...styles.globalMargin, ...styles.title, ...stylesFavorites.title }}>Favorites</Text>
            <Picker
                selectedValue={ selectedOption }
                onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)
            }>
                <Picker.Item label="A-Z" value="A-Z" />
                <Picker.Item label="Z-A" value="Z-A" />
                <Picker.Item label="Lower-Ids" value="Lower-Ids" />
                <Picker.Item label="Higher-Ids" value="Higher-Ids" />
            </Picker>
            <FlatList
                data={ sortFavorites }
                renderItem={({ item }) => renderItem(item) }
                keyExtractor={ item => item.id }
            />
        </View>
    )
}


const stylesFavorites = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    wrap: {
        width: '90%', 
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        textAlign: 'center',
        marginBottom: 10
    },
    text: {
        marginHorizontal: 15,
        textTransform: 'capitalize'
    },
    removeIcon: {
        alignSelf: 'center',
        alignItems: 'flex-end',
        width: '10%'
    }
});
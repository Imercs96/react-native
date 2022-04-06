import React, { useContext, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackScreen } from '../navigation/Navigation';

import { FadeInImage } from '../components/FadeInImage';
import { PokemonDetails } from '../components/PokemonDetails';

import { usePokemon } from '../hooks/usePokemon';
import { FavoritesContext } from '../context/FavoritesContext';
import { PokemonItem } from '../interfaces/pokemon';
import { useEffect } from 'react';

interface Props extends StackScreenProps<RootStackScreen, 'Pokemon'> {};

export const Pokemon = ({ navigation, route: { params }}: Props) => {

  const { color, pokemonItem: { picture, name, id }} = params
  const { top } = useSafeAreaInsets()

  const { isLoading, pokemonDetails } =  usePokemon(id)

  const { addFavorite, favorites: { favorites }} = useContext(FavoritesContext)

  const [ isAdded , setIsAdded ] = useState(false)

  const verifyPokemonContext = (favorites: PokemonItem[]) => {
    const value = favorites?.some(e => e.id == id)
    setIsAdded(value)
  }

  useEffect(() => {
    verifyPokemonContext(favorites)
  }, [ favorites ])
  
  return(
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>
          {/* Header */}
          <TouchableOpacity
            activeOpacity={ 0.7 }
            style={{ ...styles.backButton, top: top + 5 }}
            onPress={() => navigation.goBack()}
          >
            <Icon name='arrow-back-outline' size={ 30 } color='white' />
          </TouchableOpacity>

          {/* Pokemon Info */}
          <Text style={{ ...styles.pokemonName, top: top + 40 }}> { name } </Text>
          <Text style={{ ...styles.pokemonName, top: top + 40 }}> #{ id } </Text>

          { !isAdded && 
            <TouchableOpacity
              activeOpacity={ 0.7 }
              style={{ ...styles.addFavorite }}
              onPress={ () => { addFavorite({ picture, name, id }), setIsAdded(!isAdded) }}
            >
              <Icon name='heart-outline' size={ 40 } color='black' />
            </TouchableOpacity>
          }

          {/* Pokeball White */}
          <Image 
            source={ require('../assets/pokeball-white.png') }
            style={ styles.pokeball }
          />

          {/* Pokemon Image */}
          <FadeInImage uri={ picture } style={ styles.pokemonImage }/>

      </View>

      {/* Details */}
      { isLoading ?
        <View style={ styles.loadingIndicator }>
          <ActivityIndicator color={ color } size={ 30 }/>
        </View>
        :
        <PokemonDetails pokemon={ pokemonDetails } /> }
    </View>
  )
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 9,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000
  },
  backButton: {
    position: 'absolute',
    left: 20
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: 0,
    opacity: 0.5,
    position: 'absolute',
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addFavorite: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    zIndex: 9
  }
});

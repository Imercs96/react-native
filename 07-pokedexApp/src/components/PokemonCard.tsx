import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { getImageColors } from '../helpers/getImageColors';
import { PokemonItem } from '../interfaces/pokemon';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonItem
}
interface ImageColors {
    primary: string;
}

export const PokemonCard = ({ pokemon, pokemon: { picture, name, id }}: Props) => {
    const { width: widthScreen }= Dimensions.get('window')
    //Referencia que permite no tener errores cuando se desmontan/destruyen los componentes
    //No funciona para una lista de dependecias como muchas promesas ya que el render se mantiene en true, para ello se emplea el useState
    const isMounted = useRef(true)

    const [ ref, setRef ] = useState(true)
    const navigation = useNavigation()

    //Background Images
    const [ background, setBackground ] = useState<ImageColors>({
        primary: 'grey'
    });

    const getPokemonColors = async(uri: string) => {
        const [ primary = 'grey' ] = await getImageColors(uri)
        setBackground({ primary })
    }
    
    useEffect(() => {
        //Permite detectar un error para cuando se quiere acceder a la url de un componente desmontado
        //if(!isMounted) return
        if(!ref) return
        getPokemonColors(picture)
       
        return () => {
            //isMounted.current = false
            setRef(!ref)
        }
    }, []);
    
    return(
        <TouchableOpacity 
            activeOpacity={ 0.7 }  
            onPress={() => navigation.navigate('Pokemon' as never, { pokemonItem: pokemon, color: background.primary } as never)}>

            {/* Nombre del Pokemon y ID */}
            <View 
                style={{ 
                    ...styles.cardContainer, 
                    width: widthScreen * 0.4,
                    backgroundColor: background.primary
                }}>
                <Text style={ styles.name }> { name } </Text>
                <Text style={ styles.name }> #{ id } </Text>

                {/* Imagen Pokebola */}
                <View style={ styles.pokeballContainer }>
                    <Image source={ require('../assets/pokeball-white.png') } style={ styles.pokeball }/>
                </View>

                <FadeInImage uri={ picture } style={ styles.pokemonPicture }/> 
            </View>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 20,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 15,
        left: 10,
        textTransform: 'capitalize'
    },
    pokeball: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
    },
    pokemonPicture: {
        width: 90,
        height: 90,
        position: 'absolute',
        bottom: -5,
        right: -5,
    },
    pokeballContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.4
    }
});

import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movie';

interface Props {
    movie: Movie;
    width?: number;
    height?: number;
}

export const CardMovie = ({ movie, width= 300 , height= 460 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
    const navigation = useNavigation<any>()

    return (
        <TouchableOpacity 
            style={{...styles.container, width, height }}
            activeOpacity={ 0.8 }
            onPress={() => navigation.navigate('Detail', movie)}
        >
            <View style={ styles.imageContainer }>
                <Image 
                    source={{ uri }}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10
    },
    image: {
        flex: 1,
        borderRadius: 18,
    }
})

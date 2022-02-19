import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, ActivityIndicator, Button } from 'react-native';
import { RootStackScreen } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackScreen, 'Detail'>{};

export const Detail = ({ route }: Props) => {

    const navigation = useNavigation()
    const { poster_path, title, original_title, id  } = route.params
    const uri = `https://image.tmdb.org/t/p/w500${ poster_path }`

    const { isLoading, fullMovieDetails, cast } = useMovieDetails(id)

    return (
        <ScrollView>
            <View style={ styles.container }>
                <View style={ styles.imageContainer }>
                    <Image 
                        source={{ uri }}
                        style={ styles.image }
                    />
                </View>
            </View>
            <View style={ styles.marginContainer }>
                <Text style={ styles.subtitle }> { original_title } </Text>
                <Text style={ styles.title }> { title } </Text>
            </View>
            <View style={ styles.marginContainer }>
                { isLoading ?
                    <ActivityIndicator size={ 35 } color={'gray'} style={{ marginTop: 20 }}/> :
                    <MovieDetails fullMovieDetails={ fullMovieDetails } cast={ cast }/>
                }
            </View>
            <View style={ styles.backButton }>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        color={ 'white' }
                        name='arrow-back-outline'
                        size={ 50 }
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    imageContainer: {
        width: '100%',
        height: height * 0.7,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,

        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 10
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        elevation: 11,
        top: 30,
        left: 5
    }
})

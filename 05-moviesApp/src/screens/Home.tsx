import React, { useContext } from 'react'
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CardMovie } from '../components/CardMovie';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/Gradient';
import { useEffect } from 'react';


const { width } = Dimensions.get('window')

export const Home = () => {
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
    const { setMainColors, setPrevMainColors } = useContext(GradientContext);
    const { top } = useSafeAreaInsets()

    const getPosterColors = async(index: number) => {
        const movie = nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
        
        const [ primary = 'grey', secondary = 'lightblue', tertiary = 'orange' ] = await getImageColors(uri)

        setMainColors({ primary, secondary, tertiary })
    }

    useEffect(() => {
        nowPlaying.length > 0 && getPosterColors(0)
    }, [ nowPlaying ] );

    if(isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color={'red'} size={ 30 }/>
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top }}>

                    {/* Main Carousel */}
                    <Carousel
                        data={ nowPlaying }
                        renderItem={ ({ item }: any) => <CardMovie movie={ item }/> }
                        sliderWidth={ width }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={ 0.3 }
                        onSnapToItem={(item) => getPosterColors(item)}
                    />

                    <View style={{ marginTop: 40 }}>
                        {/* Flat List - Popular Movies */}
                        <HorizontalSlider title='Popular Movies' movies={ popular }/>

                        {/* Flat List - Popular Movies */}
                        <HorizontalSlider title='Top Raited' movies={ topRated }/>

                        {/* Flat List - Popular Movies */}
                        <HorizontalSlider title='Upcoming' movies={ upcoming }/>
                    </View>
                </View>
            </ScrollView>
        </GradientBackground>
    )
}
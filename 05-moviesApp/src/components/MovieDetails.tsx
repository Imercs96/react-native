import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/credits';
import { FullMovieDetails } from '../interfaces/movie';
import currencyFormatter from 'currency-formatter'
import { CastItem } from './CastItem';

interface Props {
    fullMovieDetails?: FullMovieDetails
    cast: Cast[]
}

export const MovieDetails = ({ fullMovieDetails, cast }: Props) => {

    return (
        <>
        {/* Details */}
        <View style={{ marginHorizontal: 5 }}>
            <View style={{ flexDirection: 'row' }}>
                <Icon
                    name='star-outline'
                    color= 'gray'
                    size={ 16 }
                />
                <Text> { fullMovieDetails?.vote_average } </Text>
                <Text style={{ marginLeft: 5 }}> 
                    - { fullMovieDetails?.genres.map(e => e.name).join(', ') } 
                </Text>
            </View>
        </View>

        {/* History */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginLeft: 2.5 }}> History </Text>
        <Text style={{ fontSize: 16, marginLeft: 9 }}> { fullMovieDetails?.overview } </Text>

        {/* Budget */}
        {fullMovieDetails?.budget ?
            <>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginLeft: 2.5 }}> Budget </Text>
                <Text style={{ fontSize: 18, marginLeft: 5 }}> 
                    { currencyFormatter.format(fullMovieDetails.budget, { code: 'USD'}) } 
                </Text>
            </>
            : null
        }

        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom: 100 }}>
            <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}> Cast </Text>
            <FlatList
                data={ cast }
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>  <CastItem actor={ item }/>}
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                style={{ marginTop: 10, height: 70 }}
            />
        </View>
        </>
    )
};

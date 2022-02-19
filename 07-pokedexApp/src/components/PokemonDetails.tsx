import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FullResponsePokemonItem } from '../interfaces/pokemon';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: FullResponsePokemonItem
}

export const PokemonDetails = ({ pokemon }: Props) => {
    const { types, weight, sprites, abilities, moves, stats } = pokemon

    return (
        <ScrollView style={{ ... StyleSheet.absoluteFillObject }} showsVerticalScrollIndicator={ false }>

            {/* Types and Weight */}
            <View style={{ ...styles.container, marginTop: 400 }}>

                {/* Types */}
                <Text style={ styles.title }>Types</Text>
                <View style={ styles.typesContainer }>
                    { types?.map(({ type }) => {
                        return(
                            <Text 
                                style={{ ...styles.regularText, marginRight: 10 }} key={ type.name }> 
                                { type.name } 
                            </Text>
                        )
                    })}
                </View>

                {/* Weight */}
                <Text style={ styles.title }>Weight</Text>
                <Text style={{ ...styles.regularText }}> { weight } Kg </Text>
            </View>

            {/* Sprites */}
            <View style={{ ...styles.container }}>
                <Text style={ styles.title }>Sprites</Text>
                <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false }>
                    <View style={ styles.scrollImageContainer}>
                        <FadeInImage uri={ sprites.back_default } style={ styles.sprite }/>
                    </View>
                    <View style={ styles.scrollImageContainer}>
                        <FadeInImage uri={ sprites.front_default } style={ styles.sprite }/>
                    </View>
                    <View style={ styles.scrollImageContainer}>
                        <FadeInImage uri={ sprites.back_shiny } style={ styles.sprite }/>
                    </View>
                    <View style={ styles.scrollImageContainer}>
                        <FadeInImage uri={ sprites.front_shiny } style={ styles.sprite }/>
                    </View>
                </ScrollView>
            </View>

             {/* Base Skills */}
             <View style={{ ...styles.container }}>
                <Text style={ styles.title }> Base Skills</Text>
                <View style={ styles.typesContainer }>
                    { abilities?.map(({ ability }) => {
                        return(
                            <Text 
                                style={{ ...styles.regularText, marginRight: 10 }} key={ ability.name }> 
                                { ability.name } 
                            </Text>
                        )
                    })}
                </View>
            </View>

            {/* Moves */}
             <View style={{ ...styles.container }}>
                <Text style={ styles.title }> Moves </Text>
                <View style={{ ...styles.typesContainer, flexWrap: 'wrap' }}>
                    { moves?.map(({ move }) => {
                        return(
                            <Text 
                                style={{ ...styles.regularText, marginRight: 10 }} key={ move.name }> 
                                { move.name } 
                            </Text>
                        )
                    })}
                </View>
            </View>

            {/* Stats */}
            <View style={{ ...styles.container }}>
                <Text style={ styles.title }> Moves </Text>
                <View>
                    { stats?.map((stat, index) => {
                        const { stat: { name }, base_stat } = stat
                        return(
                            <View key={ name + index } style={ styles.typesContainer }>
                                <Text 
                                    style={{ ...styles.regularText, width: 150, textTransform: 'capitalize' }} > 
                                    { name } 
                                </Text>
                                <Text 
                                    style={{ ...styles.regularText, fontWeight: 'bold' }} > 
                                    { base_stat } 
                                </Text>

                            </View>
                        )
                    })}
                </View>
            </View>

            {/* Sprites */}
            <View style={{ marginBottom: 20, alignItems: 'center' }}>
                <FadeInImage uri={ sprites.front_default } style={ styles.sprite }/>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    typesContainer: {
        flexDirection: 'row'
    },
    regularText: {
        fontSize: 18
    },
    sprite: {
        width: 100,
        height: 100,
    },
    scrollImageContainer: {
        
    }
});

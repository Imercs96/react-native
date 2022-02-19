import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState, useContext } from 'react';
import { FadeInImage } from '../components/FadeInImage';
import { ThemeContext } from '../context/theme/ThemeContext';

export const InfiniteScrollScreen = () => {

    const [ numbers, setNumbers ] = useState([ 0, 1, 2, 3, 4, 5, 6 ])
    const { theme: { dividerColor } } = useContext( ThemeContext )

    const loadMore = () => {
        let load: number[] = []
        numbers?.map((e, i) => { load[i] = e + numbers.length })
        setTimeout(() => setNumbers([...numbers, ...load]), 1000);
    }

    const renderItem = (item: number) => {
        return (
            <FadeInImage 
                uri={ `https://picsum.photos/id/${ item }/1024/1024` } 
                style={{ width: '100%', height: 150 }}
            />

            // <Image
            //     source={{ uri: `https://picsum.photos/id/${ item }/500/400` }} 
            //     style={{ width: '100%', height: 400 }}
            // />
        )
    }
    return(
        <View style={{ flex: 1 }}>
           
            <FlatList
                data={ numbers }
                keyExtractor={( item, index ) => (item + index).toString() }
                renderItem={({ item }) => renderItem(item)}

                ListHeaderComponent={ <HeaderTitle title='Infinite Scroll' /> }
                ListFooterComponent={() => (
                    <View style={ styles.activityIndicator }>
                        <ActivityIndicator size={ 25 } color={ dividerColor }/>
                    </View>
                )}

                onEndReached={ loadMore }
                onEndReachedThreshold={ 0.5 }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    activityIndicator: {
        height: 150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
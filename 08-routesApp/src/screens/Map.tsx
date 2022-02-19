import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Maps } from '../component/Maps';

export const Map = () => {
    return (
        <View style={styles.container}>
            <Maps />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});
import React from 'react'
import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native'

export const Loading = () => {
  return (
    <View style={ styles.activityContainer}>
        <ActivityIndicator size={ 50 } color={ 'grey' }/>
        <Text style={{ ...styles.textIndicator, 
            marginTop: (Platform.OS == 'ios' ? 0 : 10)}}> 
            Loading... </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textIndicator: {
        fontSize: 16
    },
});
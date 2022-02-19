import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles, colours } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const TabOneScreen = () => {
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Iconos </Text>
            <Text style={ styles.title }> 
                <TouchableIcon iconName="airplane-outline" size={ 60 } color={ colours.red_900 } />
                <TouchableIcon iconName="american-football-outline" size={ 80 } color={ colours.gray_900 } />
                <TouchableIcon iconName="backspace" size={ 50 } color={ colours.gray_100 } />
                <TouchableIcon iconName="apps" size={ 60 } color={ colours.gray_100 } />
                <TouchableIcon iconName="earth-outline" size={ 90 } color={ colours.gray_900 } />
                <TouchableIcon iconName="flask-sharp" size={ 50 } color={ colours.gray_900 } />
                <TouchableIcon iconName="information-circle-sharp" size={ 90 } color={ colours.red_900 } />
                <TouchableIcon iconName="layers-sharp" size={ 80 } color={ colours.gray_900 } />
                <TouchableIcon iconName="logo-apple" size={ 50 } color={ colours.gray_900 } />
                <TouchableIcon iconName="logo-react" size={ 80 } color={ colours.green_100 } />
            </Text>
        </View>
    )
}

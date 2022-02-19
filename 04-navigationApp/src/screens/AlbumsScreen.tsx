import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {

    const { logOut, authState: { isLoggedIn } } = useContext( AuthContext )
    return (
        <View style={ styles.globalMargin }>
            <Text> AlbumsScreen </Text>
            { isLoggedIn && <Button title='Log Out' onPress={ logOut }/> }
        </View>
    )
}

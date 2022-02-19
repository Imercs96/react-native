import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colours } from '../theme/appTheme';

export const SettingsScreen = () => {
    //Hook que posee el mismo comportamiento que el componente SafeAreaView, pero nos provee propiedades. Mas facil de usar
    const insets = useSafeAreaInsets()

    const { authState } = useContext( AuthContext )


    return (
        <View style={{ marginTop: insets.top }}>
            <Text> SettingsScreen </Text>
            <Text> { JSON.stringify(authState, null, 4) } </Text>

            { authState.favoriteIcon && 
                <Icon
                    name={ authState.favoriteIcon }
                    size={ 120 } 
                    color={ colours.primary } />
            }
        </View>
    )
}

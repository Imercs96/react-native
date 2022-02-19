import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

//Interface de tipado estatico para los props. Primera opcion
// interface RouterParams {
//     id: number;
//     nombre: string
// }

//Creo una interface que me pertime extender las Props del Stack para podes usar Typescript y tener tipado estatico. mas facil para visualizar las props
interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {};

export const PersonScreen = ({ route, navigation } :Props) => {
    
    //const params = route.params as RouterParams
    const params = route.params

    const { changeUsername } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: 'Navigation App Peter',
            headerBackTitle: ''
        })
    }, [ ])

    useEffect(() => {
        changeUsername(params.name)
    }, [ ])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> { JSON.stringify({ params }, null, 3)} </Text>
        </View>
    )
}

import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ButtonPermission } from '../component/ButtonPermission';
import { PermissionsContext } from '../context/Permissions';

export const Permissions = () => {

    const { permissions, askLocationPermission } = useContext(PermissionsContext)

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }> The GPS is necessary for the use of the application </Text>

            <ButtonPermission 
                title='Permission'
                onPress={ askLocationPermission }
                style={{ }}
            />

            <Text style={{ marginTop: 20 }}> { JSON.stringify(permissions, null, 5) }</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: 250,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    }
});

//AIzaSyA2XTSo7TaE8z8A7wAE8FKZPP6TFRiJJLI
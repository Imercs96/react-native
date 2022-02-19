import React, { useContext } from 'react';
import { useNavigation, Theme } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { ThemeContext } from '../context/theme/ThemeContext';

import { MenuItem } from '../interfaces/menuApp';
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem: { name, icon, component }}: Props) => {

    const navigation = useNavigation()
    const { theme: { colors } } = useContext( ThemeContext )
    
    return (
        <TouchableOpacity
            activeOpacity={ 0.5 }
            onPress={() => navigation.navigate(`${ component }` as any )}
        >
            <View style={ styles.container }>
                <Icon
                    name={ icon }
                    color={ colors.card }
                    size={ 25 }
                />
                <Text style={{
                    ...styles.itemText,
                    color: colors.text
                }}> { name } </Text>

                {/* Separator */}
                <View style={{ flex: 1 }} />

                <Icon
                    name={ 'chevron-forward-outline' }
                    color={ colors.border }
                    size={ 25 }
                />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText: {
        marginLeft: 18,
        fontSize: 16
    }
});
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme';

export const SwitchScreen = () => {
    const { theme: { colors } } = useContext( ThemeContext )

    const [ state, setState ] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });

    const { isActive, isHappy, isHungry } = state

    const onChange = (value: boolean, field: string) => {
        setState({ ...state, [ field ]: value })
    }

    return (
        <View style={{ ...styles.globalMargin, marginTop: 20 }}>
            <HeaderTitle title={ 'Switches' } />

            <View style={ stylesScreen.switchRow }>
                <Text style={{ ...stylesScreen.switchText, color: colors.text }}> isActive</Text>
                <CustomSwitch isOn={ isActive } onChange={( value ) => onChange(value, 'isActive') }/>
            </View>

            <View style={ stylesScreen.switchRow }>
                <Text style={{ ...stylesScreen.switchText, color: colors.text }}> isHungry</Text>
                <CustomSwitch isOn={ isHungry } onChange={( value ) => onChange(value, 'isHungry') }/>
            </View>

            <View style={ stylesScreen.switchRow }>
                <Text style={{ ...stylesScreen.switchText, color: colors.text }}> isHappy</Text>
                <CustomSwitch isOn={ isHappy } onChange={( value ) => onChange(value, 'isHappy') }/>
            </View>

            <Text style={{ ...stylesScreen.switchText, color: colors.text }}> 
                { JSON.stringify(state, null, 5) }
            </Text>

        </View>
    );
};

const stylesScreen = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    switchText: {
        fontSize: 25
    }
});
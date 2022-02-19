import React, { useContext } from 'react';
import { HeaderTitle } from '../components/HeaderTitle';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeTheme = () => {
    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext( ThemeContext )

    return(
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Themes' />
            <View style={ stylesScreen.viewContainer}>
                <TouchableOpacity 
                    activeOpacity={ 0.7 } 
                    style={{ ...stylesScreen.buttonContainer, backgroundColor: colors.primary }}
                    onPress={ setLightTheme }
                >
                    <Text style={ stylesScreen.buttonText }> Light </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={ 0.7 } 
                    style={{ ...stylesScreen.buttonContainer, backgroundColor: colors.primary }}
                    onPress={ setDarkTheme }
                >
                    <Text style={ stylesScreen.buttonText }> Dark </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const stylesScreen = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        width: 150,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#5856D6',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});
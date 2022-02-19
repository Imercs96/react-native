import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';
import { useContext } from 'react';

export const TextInputs = () => {
    const { theme: { colors } } = useContext( ThemeContext )

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        number: '',
        password: '',
        isSubscribed: false
        
    });

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <View style={ styles.globalMargin }>
                    <HeaderTitle title='TextInput' />

                    <TextInput 
                        style={{ ...stylesScreen.inputstyle, borderColor: colors.text, color: colors.text }}
                        placeholder='Name'
                        placeholderTextColor={ colors.card }
                        autoCapitalize='words'
                        autoCorrect={ false }
                        onChangeText={(value) => onChange(value, 'name')}
                    />
                    <TextInput 
                        style={{ ...stylesScreen.inputstyle, borderColor: colors.text, color: colors.text }}
                        placeholder='Email'
                        placeholderTextColor={ colors.card }
                        autoCapitalize='none'
                        autoCorrect={ false }
                        keyboardType='email-address'
                        keyboardAppearance='dark'
                        onChangeText={(value) => onChange(value, 'email')}
                    />
                    <TextInput 
                        style={{ ...stylesScreen.inputstyle, borderColor: colors.text, color: colors.text }}
                        placeholder='Number'
                        placeholderTextColor={ colors.card }
                        keyboardType='number-pad'
                        onChangeText={(value) => onChange(value, 'number')}
                    />
                    <TextInput 
                        style={{ ...stylesScreen.inputstyle, borderColor: colors.text, color: colors.text }}
                        placeholder='Password'
                        placeholderTextColor={ colors.card }
                        autoCapitalize='none'
                        autoCorrect={ false }
                        keyboardAppearance='dark'
                        onChangeText={(value) => onChange(value, 'password')}
                        secureTextEntry={ true }
                    />

                    <View style={ stylesScreen.switchRow }>
                        <Text style={ stylesScreen.switchText }> Subscribed</Text>
                        <CustomSwitch isOn={ isSubscribed } onChange={( value ) => onChange(value, 'isSubscribed') }/>
                    </View>

                    <HeaderTitle title={ JSON.stringify(form, null, 5) } />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const stylesScreen = StyleSheet.create({
    inputstyle: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 5
    },
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
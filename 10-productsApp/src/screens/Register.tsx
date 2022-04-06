import React, { useContext,useEffect } from 'react'
import { Text, View, KeyboardAvoidingView, Platform, TextInput, Keyboard, TouchableOpacity, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { AuthContext } from '../context/AuthContext';

import { Background } from '../components/Background'
import { Logo } from '../components/Logo';

import { loginStyles } from '../theme/login';
import { useForm } from '../hooks/useForm';


interface Props extends StackScreenProps<any, any> {}

export const Register = ({ navigation }: Props) => {

    const { signUp, removeError, errorMessage } = useContext(AuthContext)

    const { email, password, name, onChange } = useForm({
        name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        if(errorMessage.length < 1) return;
      
        Alert.alert('Incorrect Register', errorMessage, [{
            text: 'Ok',
            onPress: removeError
        }])
      }, [ errorMessage ])

    const onSignUp = () => { 
        Keyboard.dismiss()
        signUp({ nombre: name, correo: email, password })
    }

    return (
        <>
            {/* Background */}
            <Background/>

            {/* Keyboard Avoid View */}
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ (Platform.OS == 'ios' ? 'padding' : 'height' )}
            >
                <View style={ loginStyles.formContainer }>

                    <Logo />
                    <Text style={ loginStyles.title }>Sign In </Text>

                    {/* Name */}
                    <Text style={ loginStyles.label }>Name: </Text>
                    <TextInput 
                        placeholder='Name'
                        placeholderTextColor={ 'rgba(255, 255, 255, 0.4)' }
                        underlineColorAndroid={ 'white' }
                        style={[
                            loginStyles.inputField,
                            (Platform.OS == 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor={ 'white' }
                        autoCapitalize={ 'words' }
                        autoCorrect={ false }
                        onChangeText={( value ) => onChange(value, 'name')}
                        value={ name }
                        onSubmitEditing={ onSignUp }
                    />

                    {/* Email */}
                    <Text style={ loginStyles.label }>Email: </Text>
                    <TextInput 
                        placeholder='Email'
                        placeholderTextColor={ 'rgba(255, 255, 255, 0.4)' }
                        keyboardType='email-address'
                        underlineColorAndroid={ 'white' }
                        style={[
                            loginStyles.inputField,
                            (Platform.OS == 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor={ 'white' }
                        autoCapitalize={ 'none' }
                        autoCorrect={ false }
                        onChangeText={( value ) => onChange(value, 'email')}
                        value={ email }
                        onSubmitEditing={ onSignUp }
                    />

                    {/* Password */}
                    <Text style={ loginStyles.label }>Password: </Text>
                    <TextInput 
                        placeholder='*******'
                        placeholderTextColor={ 'rgba(255, 255, 255, 0.4)' }
                        keyboardType='email-address'
                        underlineColorAndroid={ 'white' }
                        secureTextEntry
                        style={[
                            loginStyles.inputField,
                            (Platform.OS == 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor={ 'white' }
                        autoCapitalize={ 'none' }
                        autoCorrect={ false }
                        onChangeText={( value ) => onChange(value, 'password')}
                        value={ password }
                        onSubmitEditing={ onSignUp }
                    />

                    {/* SignIn Button */}
                    <View style={ loginStyles.buttonContainer }>
                        <TouchableOpacity
                            style={ loginStyles.button }
                            activeOpacity={ 0.7 }
                            onPress={ onSignUp }
                        >
                            <Text style={ loginStyles.buttonText }>Create an account</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/* Enter to an account */}
                    <TouchableOpacity
                        style={ loginStyles.buttonReturn }
                        activeOpacity={ 0.7 }
                        //Destroy screen for error handler
                        onPress={() => navigation.replace('Login') }
                    >
                        <Text style={ loginStyles.buttonText }>Following</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

import React, { useContext, useEffect } from 'react'
import { Text, View, TextInput, Platform, KeyboardAvoidingView, TouchableOpacity, Keyboard, Alert } from 'react-native'

import { useForm } from '../hooks/useForm';

import { Background } from '../components/Background';
import { Logo } from '../components/Logo';

import { loginStyles } from '../theme/login';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const Login = ({ navigation }: Props) => {

    const { signIn, errorMessage, removeError } = useContext(AuthContext)

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    })

    useEffect(() => {
      if(errorMessage.length < 1) return;
    
      Alert.alert('Incorrect Login', errorMessage, [{
          text: 'Ok',
          onPress: removeError
      }])
    }, [ errorMessage ])
    

    const onLogin = () => { 
        Keyboard.dismiss()
        signIn({ correo: email, password })
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
                    <Text style={ loginStyles.title }>Log In </Text>

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
                        onSubmitEditing={ onLogin }
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
                        onSubmitEditing={ onLogin }
                    />

                    {/* SignIn Button */}
                    <View style={ loginStyles.buttonContainer }>
                        <TouchableOpacity
                            style={ loginStyles.button }
                            activeOpacity={ 0.7 }
                            onPress={ onLogin }
                        >
                            <Text style={ loginStyles.buttonText }>Log in</Text>
                        </TouchableOpacity>
                    </View>
                    
                     {/* Create an account */}
                    <View style={ loginStyles.newUserContainer }>
                        <TouchableOpacity
                            style={ loginStyles.button }
                            activeOpacity={ 0.7 }
                            //Destroy screen for error handler
                            onPress={() => navigation.replace('Register') }
                        >
                            <Text style={ loginStyles.buttonText }>Create an account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

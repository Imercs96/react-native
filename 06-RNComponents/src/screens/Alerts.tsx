import React, { useContext } from 'react';
import prompt from 'react-native-prompt-android';

import { Alert, Button, Platform, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

export const Alerts = () => {
  const { theme: { colors } } = useContext( ThemeContext )

  const showAlert = () => {
    Alert.alert(
      "Title",
      "Message",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: 'destructive'
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    ); 
  }

  //Funciona solo para IOS
  const showPromptIOS = () => {
    Alert.prompt(
      'Are you sure?',
      `This action don't reverse`,
      (value: string) => console.log(value, 'value'),
      //'login-password',
      'plain-text',
      'Hello World!!',
      'number-pad',
      //'email-address'
    ) 
  }

  const showPrompt = () => {
    prompt(
        'Enter password',
        'Enter your password to claim your $1.5B in lottery winnings',
        [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
        ],
        {
            type: 'secure-text',
            cancelable: false,
            defaultValue: 'test',
            placeholder: 'placeholder'
        }
    );
  }

  return(
    <View style={ styles.globalMargin }>
      <HeaderTitle title='Alerts'/>

      <Button title='Show Alert' onPress={ showAlert } color={ colors.text }/>
      { Platform.OS == 'ios' ? <Button title='Show PromptIOS' onPress={ showPromptIOS } color={ colors.text }/> : null }
      <Button title='Show Prompt' onPress={ showPrompt } color={ colors.text }/>
    </View>
  );
};

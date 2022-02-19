import React from 'react';
import { Button, Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const ModalScreen = () => {

    const [ isVisible, setIsVisible ] = useState(false);
    return(
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Modal'/>

            <Button 
                title="Open Modal"
                onPress={() => setIsVisible(!isVisible)}
            />

            <Modal
                animationType='fade'
                visible={ isVisible }
                transparent={ true }
            >
                <View
                    style={{ 
                        flex: 1, 
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {/* Contenido del Modal */}
                    <View style={ stylesScreen.container }>
                        <Text style={{ fontSize: 20, fontWeight: '600', marginVertical: 5 }}> Modal</Text>
                        <Text style={{ fontSize: 16, fontWeight: '400' }}> Modal's Body</Text>
                        
                        <TouchableOpacity
                            onPress={() => setIsVisible(!isVisible)}
                            style={ stylesScreen.button }
                            activeOpacity={ 0.7 }
                        >
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}> Close </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    ) 
};

const stylesScreen = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        borderRadius: 10,
        width: 200,
        height: 100,
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        elevation: 10,
        alignItems: 'center'
    },
    button: {
        width: 100,
        height: 25,
        marginVertical: 5,
        backgroundColor: '#6D6D6D',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
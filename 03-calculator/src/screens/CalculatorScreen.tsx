import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const { previousNumber,
        actualNumber,
        clear,
        switchNegative,
        deleteDigit,
        divideButton,
        createNumber,
        multiplyButton,
        restButton,
        sumButton,
        calculate } = useCalculator()

    return (
        <View style={styles.totalContainer}>
            <View style={styles.totalContainer}>
                { previousNumber !== '0' ?
                    <Text style={styles.totalSmall}> { previousNumber } </Text>
                    : null
                }
                <Text 
                    style={styles.total} 
                    numberOfLines={ 1 }
                    adjustsFontSizeToFit
                > 
                    { actualNumber } 
                </Text>
            </View>

            {/* Fila de Botones */}
            <View style={styles.row}>
                <ButtonCalculator text='C' background='#9B9B9B' color='black' onPress={ clear }/>
                <ButtonCalculator text='+/-' background='#9B9B9B' color='black' onPress={ switchNegative }/>
                <ButtonCalculator text='del' background='#9B9B9B' color='black' onPress={ deleteDigit }/>
                <ButtonCalculator text='/' background='#FF9427'  onPress={ divideButton }/>
            </View>

            {/* Fila de Botones */}
            <View style={styles.row}>
                <ButtonCalculator text='7' onPress={ createNumber }/>
                <ButtonCalculator text='8' onPress={ createNumber }/>
                <ButtonCalculator text='9' onPress={ createNumber }/>
                <ButtonCalculator text='x' onPress={ multiplyButton }/>
            </View>

            {/* Fila de Botones */}
            <View style={styles.row}>
                <ButtonCalculator text='4' onPress={ createNumber }/>
                <ButtonCalculator text='5' onPress={ createNumber }/>
                <ButtonCalculator text='6' onPress={ createNumber }/>
                <ButtonCalculator text='-' onPress={ restButton }/>
            </View>

            {/* Fila de Botones */}
            <View style={styles.row}>
                <ButtonCalculator text='1' onPress={ createNumber }/>
                <ButtonCalculator text='2' onPress={ createNumber }/>
                <ButtonCalculator text='3' onPress={ createNumber }/>
                <ButtonCalculator text='+' onPress={ sumButton }/>
            </View>

            {/* Fila de Botones */}
            <View style={styles.row}>
                <ButtonCalculator text='0' biggerButton onPress={ createNumber }/>
                <ButtonCalculator text='.' onPress={ createNumber }/>
                <ButtonCalculator text='=' onPress={ calculate }/>
            </View>
        </View>
    )
}

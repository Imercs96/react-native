import { useState, useRef } from 'react'

//Son exclusivas de Typescript y tienen una funcionalidad parecidad al swicth de JS
enum Operations {
    sum, rest, multiply, divide
}

export const useCalculator = () => {
    const [ previousNumber, setPreviousNumber ] = useState('0')
    const [ actualNumber, setActualNumber ] = useState('0')
    const lastOperation = useRef<Operations>()

    //Limpia el estado actual a 0
    const clear = () => { setActualNumber('0'), setPreviousNumber('0') }

    //Creacion de los numeros
    const createNumber = (number: string) => {
        
        //No acepta doble .
        if(actualNumber.includes('.') && number === '.') return
        if(actualNumber.startsWith('0') || actualNumber.startsWith('-0')) {

            //Punto decimal
            number === '.' ? 
                setActualNumber(actualNumber + number ) : 

                //Evalua si existe punto flotante con 0
                number === '0' && actualNumber.includes('.') ? setActualNumber(actualNumber + number ) :
                
                //Reemplaza digito distinto de 0 en el estado actual
                number !== '0' && !actualNumber.includes('.') ? setActualNumber(number) : 
                
                //Evita la contatenacion de multiples 0 al inicio
                number === '0' && !actualNumber.includes('.') ? setActualNumber(number) : 
                
                //Funcionamiento normal
                setActualNumber(actualNumber + number )
        }
        else {
            setActualNumber(actualNumber + number )
            //if(lastOperation.current) setActualNumber(number)
        }
    }

    //Switch de numeros negativos/positivos
    const switchNegative = () => {
        actualNumber.includes("-") ? setActualNumber(actualNumber.replace('-', '')) : setActualNumber(`-${actualNumber}`)
    }

    //Elimina el ultimo digito del numero
    const deleteDigit = () => {
        setActualNumber(actualNumber.slice(0, actualNumber.length - 1))
        if(actualNumber.length < 2) setActualNumber('0')
        if(actualNumber.length < 3 && actualNumber.startsWith('-')) setActualNumber('0')
    }

    //Actualiza el resultado actual en memoria
    const changeNumberByPrevious = () => {
        actualNumber.endsWith('.') ? setPreviousNumber(actualNumber.slice(0,-1)) : setPreviousNumber(actualNumber)
        setActualNumber('0')
    }

    //Funcionalidad de dividir
    const divideButton = () => {
        changeNumberByPrevious()
        lastOperation.current = Operations.divide
    }
    
    //Funcionalidad de multiplicar
    const multiplyButton = () => {
        changeNumberByPrevious()
        lastOperation.current = Operations.multiply
    }

    //Funcionalidad de sumar
    const sumButton = () => {
        changeNumberByPrevious()
        lastOperation.current = Operations.sum
    }

    //Funcionalidad de restar
    const restButton = () => {
        changeNumberByPrevious()
        lastOperation.current = Operations.rest
    }
    
    const calculate = () => {

        switch (lastOperation.current) {
            case Operations.sum:
                setActualNumber(`${Number(previousNumber) + Number(actualNumber)}`)
                break;
            
            case Operations.rest:
                setActualNumber(`${Number(previousNumber) - Number(actualNumber)}`)
                break;   

            case Operations.multiply:
                setActualNumber(`${Number(previousNumber) * Number(actualNumber)}`)
                break;

            case Operations.divide:
                setActualNumber(`${Number(previousNumber) / Number(actualNumber)}`)
                if (!isFinite(Number(actualNumber))) {
                    setActualNumber('división no valida')
                } else {
                    setActualNumber(`${Number(previousNumber) / Number(actualNumber)}`)     
                }
                break;
            default:
                break;
        }
    }
    return { 
        previousNumber,
        actualNumber,
        clear,
        switchNegative,
        deleteDigit,
        divideButton,
        createNumber,
        multiplyButton,
        restButton,
        sumButton,
        calculate
    }
}

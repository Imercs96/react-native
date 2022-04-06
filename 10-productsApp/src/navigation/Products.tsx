import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Product } from '../screens/Product'
import { Products } from '../screens/Products'

export type ProductsStackParams = {
    Products: undefined,
    Product: { id?: string, name?: string}
}

const Stack = createStackNavigator<ProductsStackParams>()

export const ProductsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'white'
                },
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                }
            }}
        >
            <Stack.Screen name='Products' component={ Products } options={{ title: 'Products'}}/>
            <Stack.Screen name='Product' component={ Product }/>
        </Stack.Navigator>
    )
}

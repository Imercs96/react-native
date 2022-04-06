import React, { useContext, useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';

import { ProductsContext } from '../context/ProductContext';
import { ProductsStackParams } from '../navigation/Products';

interface Props extends StackScreenProps<ProductsStackParams, 'Products'>{};

export const Products = ({ navigation }: Props) => {

    const { products, loadProducts, deleteProduct } = useContext(ProductsContext)
    const [ refreshing, setRefreshing ] = useState(false);

    //Funcion que dispara una vez que se actualiza
    const updateProductsFromBackend = async () => {
        setRefreshing(true)
        await loadProducts()
        setRefreshing(false)
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return(
                    <TouchableOpacity
                        activeOpacity={ 0.7 }
                        style={{ marginBottom: 10 }}
                        onPress={() => navigation.navigate('Product', {})}
                    >
                        <Text> Add </Text>
                    </TouchableOpacity>
                )
            }
        })
    }, [])

    return (
        <View style={ styles.container }>
            <FlatList 
                data={ products }
                keyExtractor={ (p) => p._id }

                ItemSeparatorComponent={() => {
                    return(
                        <View style={ styles.itemSeparator }/>
                    )
                }}

                renderItem={({ item }) => {
                    return(
                        <View style={ styles.rowContainer }>
                            <TouchableOpacity 
                                activeOpacity={ 0.7 }
                                onPress={() => navigation.navigate('Product', {
                                    id: item._id,
                                    name: item.nombre
                                })}
                            >
                                <Text style={ styles.productName }> { item.nombre } </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                activeOpacity={ 0.7 }
                                onPress={ () => deleteProduct(item._id) }
                            >
                                <Text style={ styles.productName }> Delete </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}

                refreshControl={
                    <RefreshControl 
                        refreshing= { refreshing }
                        onRefresh={ updateProductsFromBackend }
                    />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productName: {
        fontSize: 16,
        textTransform: 'capitalize'
    },
    itemSeparator: {
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0, 0, 0, 0.3)',
        marginVertical: 5
    }
});

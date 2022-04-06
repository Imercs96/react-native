//Libraries
import React, { useContext, useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

//Native components
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Image } from 'react-native';

//Navigation
import { ProductsStackParams } from '../navigation/Products';

//Hooks
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductContext';

interface Props extends StackScreenProps<ProductsStackParams, 'Product'>{};

export const Product = ({ route, navigation }: Props) => {

    const { id, name = '' } = route.params
    const [ tempUri, setTempUri ]  = useState<string>('')

    const { loadProductById, addProduct, updateProduct, updateImage } = useContext(ProductsContext)

    const { categories } = useCategories()

    const { _id, categoryId, fullName, img, form, onChange, setFormValue } = useForm({
        _id: id,
        categoryId: '',
        fullName: name,
        img: ''
    })
    
    useEffect(() => {
        navigation.setOptions({
            title: fullName ? fullName : 'New Product'
        })
    }, [ fullName ])

    useEffect(() => {
        loadProduct()
    }, [])

    const loadProduct = async () => {
        if(id?.length) {
            const product = await loadProductById(id)
            setFormValue({
                _id: id,
                categoryId: product.categoria._id,
                img: product.img || '',
                fullName: name
            })
        }
        return;
    }
    
    const addOrUpdate = async() => {
        if(id && id?.length > 0 ) updateProduct(categoryId, fullName, id)
        else {
            //Agrego esta condicion temporal para obtener siempre un valor de categoria por default
            const temporalCategoryId = categoryId || categories[0]._id
            const newProduct = await addProduct(temporalCategoryId, fullName)
            onChange(newProduct._id, '_id')
        }
    }

    const takePhoto = () => {
        launchCamera({
            mediaType: 'photo',
            quality: 0.5
        }, (response) => {
            if(response.didCancel) return
            if(!response.assets?.map(e => e.uri)) return 

            response?.assets?.map(e => e.uri && setTempUri(e.uri))

            const [ data ] = response?.assets.map(e => {
                if(e) {
                    const fileName = e?.fileName
                    const type = e?.type ? e?.type : 'image/jpeg'
                    const uri = e?.uri ? e?.uri : 'photo.jpg'
                    return { fileName, type, uri }
                }
            })
            _id && data && data?.fileName && 
                updateImage(data?.uri, data?.fileName, data?.type, _id);
        });
    }

    const takePhotofromGallery = () => {
        launchImageLibrary({
            mediaType: 'photo',
            quality: 0.5
        }, (response) => {
            if(response.didCancel) return
            if(!response.assets?.map(e => e.uri)) return 
            
            response?.assets?.map(e => e.uri && setTempUri(e.uri))

            const [ data ] = response?.assets.map(e => {
                if(e) {
                    const fileName = e?.fileName
                    const type = e?.type ? e?.type : 'image/jpeg'
                    const uri = e?.uri ? e?.uri : 'photo.jpg'
                    return { fileName, type, uri }
                }
            })
            _id && data && data?.fileName && 
                updateImage(data?.uri, data?.fileName, data?.type, _id);
        });
    }

    return (
        <View style={ styles.container }>
            <ScrollView>
                <Text style={ styles.label }>Product's name</Text>

                <TextInput 
                    placeholder='Product'
                    value={ fullName }
                    style={ styles.textInput }
                    onChangeText={( value ) => onChange(value, 'fullName')}
                />

                {/* Picker/Selector */}
                <Text style={ styles.label }>Category:</Text>

                <Picker
                    selectedValue={ categoryId }
                    onValueChange={ value => onChange(value, 'categoryId') }
                >
                        { categories?.map(category => (
                            <Picker.Item 
                                label={ category.nombre } 
                                value={ category._id } 
                                key={ category._id } 
                            />
                        ))}
                </Picker>

                {/* Save Button */}
                <Button 
                    title='Save'
                    color='#5856D6'
                    onPress={ addOrUpdate }
                />

                {_id && _id?.length > 0 ? 
                    <View style={ styles.buttonAccessContainer}>
                        {/* Camera Button */}
                        <Button 
                            title='Camera'
                            color='#5856D6'
                            onPress={ takePhoto }
                        />
                        <View style={{ width: 10 }}/>
                        {/* Gallery Button */}
                        <Button 
                            title='Gallery'
                            color='#5856D6'
                            onPress={ takePhotofromGallery }
                        />
                    </View>
                    : null
                }

                { img.length > 0 && !tempUri ? 
                    <Image
                        source={{ uri: img }}
                        style={ styles.image }
                    />
                    : null
                }

                { tempUri ? 
                    <Image
                        source={{ uri: tempUri }}
                        style={ styles.image }
                    />
                    : null
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20
    },
    label: {
        fontSize: 18
    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        height: 45,
        marginTop: 5,
        marginBottom: 15
    },
    buttonAccessContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    },
    image: {
        marginTop: 20,
        width: '100%',
        height: 300
    }
});
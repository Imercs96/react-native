import React, { createContext, useState, useEffect } from "react";
import productsAPI from "../api/products";
import { Products, ProductsResponse } from '../interfaces/appInterfaces';

//Tipado que permite determinar las propiedades del contexto ProductsContext
type ProductsContextProps = {
    products: Products[];
    loadProducts: () => Promise<void>
    addProduct: ( categoryId: string, productName: string ) => Promise<Products>
    updateProduct: ( categoryId: string, productName: string, productId: string ) => Promise<void>
    deleteProduct: ( id: string ) => Promise<void>
    loadProductById: ( id: string ) => Promise<Products>
    updateImage: ( uri: string, name: string, type: string, id: string ) => Promise<void>
}

export const ProductsContext = createContext({} as ProductsContextProps)

export const ProductsProvider = ({ children }: any) => {

    const [ products, setProducts ] = useState<Products[]>([])

    useEffect(() => {
        loadProducts()
    }, [])
    

    const loadProducts = async () => {
        const response = await productsAPI.get<ProductsResponse>('/productos?limite=50')
        const { data: { productos } } = response
        setProducts([ ...productos ])
    }

    const addProduct = async ( categoryId: string, productName: string ):Promise<Products> => {
        try { 
            const response = await productsAPI.post<Products>(`/productos`,{
                nombre: productName,
                categoria: categoryId
            })
            const { data } = response
            setProducts([...products, data ])

            return data
            
        } catch(error) {
            throw error
        }
        
    }

    const updateProduct = async ( categoryId: string, productName: string, productId: string ) => {
        try { 
            const response = await productsAPI.put<Products>(`/productos/${ productId }`,{
                nombre: productName,
                categoria: categoryId
            })
            const { data } = response
            setProducts( products?.map(prod => { return (prod._id == productId) ? data : prod }))

        } catch(error) {
            console.error(error)
        }
    }

    const deleteProduct = async ( id: string ): Promise<void> => {
        await productsAPI.delete<Products>(`/productos/${ id }`)
        await loadProducts()
    }

    const loadProductById = async ( id: string ): Promise<Products> => {
        const response = await productsAPI.get<Products>(`/productos/${ id }`)
        const { data } = response 
        return data
    }

    const updateImage = async ( uri: string, name: string, type: string, id: string ) => {
        const fileToUpload = { uri, type, name }
        const baseURL = 'http://192.168.100.6:8080/api'

        const formData = new FormData()
        formData.append('archivo', fileToUpload)

        try {
            //Usamos Fetch porque Axios no funciona para este endpoint, status 400, network error
            const response = await fetch(`${baseURL}/uploads/productos/${id}`, {
                method: 'PUT',
                body: formData
            });
            //const response = await productsAPI.put(`uploads/productos/${ id }`, formData)
            console.log(response, 'response')
        } catch(error) {
            console.error(error)
        }
    }

    return(
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            updateImage
        }}
        >
            { children }
        </ProductsContext.Provider>
    )
}
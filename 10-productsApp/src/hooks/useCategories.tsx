import { useState, useEffect } from "react"
import { CategoriesResponse, Category } from "../interfaces/appInterfaces"
import productsAPI from '../api/products';

export const useCategories = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [ categories, setCategories ] = useState<Category[]>([])

    useEffect(() => {
        getCategories()
    }, [])
    
    const getCategories = async () => {
        const response = await productsAPI.get<CategoriesResponse>('/categorias')
        const { data } = response
        setCategories([ ...data.categorias ])
        setIsLoading(!isLoading)
    }
    return {
        isLoading,
        categories
    }
}
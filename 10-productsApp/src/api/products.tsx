import AsyncStorage from "@react-native-async-storage/async-storage";
import axios  from "axios";

const baseURL = 'http://192.168.100.6:8080/api'

const productsAPI = axios.create({ baseURL })

//Axios middleware
productsAPI.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('@user_token')
            //await AsyncStorage.removeItem('@user_token')

            //Token configuration on headers requests
            if(token && config?.headers) config.headers['x-token'] = token
        } catch (error) {
            console.error(error)
        }
        return config
    }
)

export default productsAPI
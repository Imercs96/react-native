import { useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/interfaces';

export const useLocation = () => {

    const [ hasPosition, setHasPosition ] = useState(false)
    const [ initialPosition, setInitialPosition ] = useState<Location>({
        latitude: 0,
        longitude: 0
    })

    useEffect(() => {
        getCurrentLocation()
        .then( location => {
            setInitialPosition(location),
            setHasPosition(!hasPosition)
        })
    }, [])

    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(

            //Success function
            ({ coords: { latitude, longitude }}) => resolve({ latitude, longitude }),
            //Error function
            (err) => reject({ err }),
            //Configuration 
            { enableHighAccuracy: true }
        );
        })
    }

    return {
        hasPosition,
        initialPosition,
        getCurrentLocation
    }
}

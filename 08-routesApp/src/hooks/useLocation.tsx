import { useEffect, useRef, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/interfaces';

export const useLocation = () => {

    const [ hasPosition, setHasPosition ] = useState(false)
    const [ routeLines, setRouteLines ] = useState<Location[]>([])

    const [ initialPosition, setInitialPosition ] = useState<Location>({
        latitude: 0,
        longitude: 0
    })
    const [ userLocation, setUserLocation ] = useState<Location>({
        latitude: 0,
        longitude: 0
    })

    const watchId = useRef<number>()
    const isMouted = useRef<boolean>(true)

    useEffect(() => {
        isMouted.current = true
    
        return () => { isMouted.current = false }
    }, [])
    
    useEffect(() => {
        getCurrentLocation()
        .then( location => {
            if(!isMouted) return 
            setInitialPosition(location),
            setUserLocation(location)
            setRouteLines(routes => [ ...routes, location ])
            setHasPosition(!hasPosition)
        })
        .catch(err => console.error(err))
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

    const followUserLocation = () => {
        watchId.current = Geolocation.watchPosition(

            //Success function
            ({ coords: { latitude, longitude }}) => {
                if(!isMouted) return 
                
                setUserLocation({ latitude, longitude })
                setRouteLines(routes => [ ...routes, { latitude, longitude } ])
            },
            //Error function
            (err) => console.error(err),
            //Configuration 
            { enableHighAccuracy: true, distanceFilter: 10 }
    )}

    const stopFollowUserLocation = () => {
        if(watchId.current) Geolocation.clearWatch(watchId.current)
    }

    return {
        hasPosition,
        initialPosition,
        userLocation,
        routeLines,
        getCurrentLocation,
        followUserLocation,
        stopFollowUserLocation
    }
}

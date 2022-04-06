import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

import { useLocation } from '../hooks/useLocation';
import { Loading } from '../screens/Loading';
import { FloatingActionButton } from './FloatingActionButton';

interface Props {
  markers?: Marker[];
}

export const Maps = ({ markers }: Props) => {

  const { 
    initialPosition,
    hasPosition, 
    getCurrentLocation, 
    followUserLocation,
    stopFollowUserLocation,
    userLocation,
    routeLines
  } = useLocation()

  const mapViewRef = useRef<MapView>()
  const following = useRef<boolean>(true)
  const [ showPolyline, setShowPolyline ] = useState<boolean>(true)

  useEffect(() => {
    followUserLocation()
    return () => {
      stopFollowUserLocation()
    }
  }, [ ])

  useEffect(() => {
    if(!following.current) return 

    const { latitude, longitude } = userLocation
    mapViewRef.current?.animateCamera({ center: { latitude, longitude }})
  }, [ userLocation ])

  const centerPosition = async () => {
    const { latitude, longitude } = await getCurrentLocation()
    following.current = true
    mapViewRef.current?.animateCamera({ center: { latitude, longitude }})
  }

  if(!hasPosition) return <Loading />

  
  return (
    <>
        <MapView
          ref={(element) => mapViewRef.current = element! }
          showsUserLocation
          //provider={ PROVIDER_GOOGLE } // remove if not using Google Maps
          style={ styles.map }
          region={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
          }}
          onTouchStart={() => following.current = false }
        >
          { showPolyline ? 
            <Polyline 
              coordinates={ routeLines }
              strokeColor={ 'black' }
              strokeWidth={ 3 }
            />
            : null
          }

          {/* <Marker
            image={ require('../assets/custom-marker.png')}
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title={'This is a title'}
            description={'This is a description'}
          /> */}
      
        </MapView>

        <FloatingActionButton
          onPress={() => setShowPolyline(!showPolyline) }
          iconName='brush-outline'
          style={ styles.floatingActionButtonPolyline }
        />

        <FloatingActionButton
          onPress={ centerPosition }
          iconName='compass-outline'
          style={ styles.floatingActionButton }
        />
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    floatingActionButton: {
      position: 'absolute',
      bottom: 20,
      right: 20
    },
    floatingActionButtonPolyline: {
      position: 'absolute',
      bottom: 80,
      right: 20
    }
});

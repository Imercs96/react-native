import React, { useRef } from 'react'
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { Loading } from '../screens/Loading';
import { FloatingActionButton } from './FloatingActionButton';

interface Props {
  markers?: Marker[];
}

export const Maps = ({ markers }: Props) => {

  const { initialPosition, hasPosition, getCurrentLocation } = useLocation()
  const mapViewRef = useRef<MapView>()

  const centerPosition = async () => {
    const { latitude, longitude } = await getCurrentLocation()

    mapViewRef.current?.animateCamera({ center: { latitude, longitude }})
  }

  if(!hasPosition) return <Loading />
  
  return (
    <>
        <MapView
          ref={(element) => mapViewRef.current = element! }
          showsUserLocation
          //provider={ PROVIDER_GOOGLE } // remove if not using Google Maps
          style={styles.map}
          region={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
          }}
        >
          <Marker
            image={ require('../assets/custom-marker.png')}
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title={'This is a title'}
            description={'This is a description'}
          />
      
        </MapView>

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
    }
});

import React, { createContext, useEffect, useState } from "react";
import { AppState, Platform } from "react-native";
import { PERMISSIONS, PermissionStatus, request, check, openSettings } from 'react-native-permissions';

//Parametrizo mi interface
export interface PermissionState {
    locationStatus: PermissionStatus
}

//Defino mi estado en base a mi interface
export const permissionInitState: PermissionState = {
    locationStatus: 'unavailable'
}

//Parametrizo mis propiedades. Uso type porque no es necesario exportarlo, sino es de uso interno
type PermissionsContextProps = {
    permissions: PermissionState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

//Creacion de context API
export const PermissionsContext = createContext({} as PermissionsContextProps)

//Definicion del provider y propiedades para manejar el context API de manera global
export const PermissionsProvider = ({ children}: any) => {

    const [ permissions, setPermissions ] = useState(permissionInitState)

    //Listener que esta pendiente de los cambios o permisos de mi app. Se ejecuta una unica vez, por eso no es necesario remover el eventListener
    useEffect(() => {
        //Por ser una linea no creamos otro useEffect para manejar los permisos
        checkLocationPermission()

        AppState.addEventListener('change', state => {
            if(state !== 'active') return 
            checkLocationPermission()
        })
    }, [])
    

    const askLocationPermission = async () => { 
        let permissionStatus : PermissionStatus

        //La funcion check, revisa por defecto los permisos de la app, no se los pide al usuario
        //await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

        if(Platform.OS == 'ios') permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        else permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)

        if(permissionStatus == 'blocked') openSettings()

        setPermissions({ ...permissions, locationStatus: permissionStatus})
    }
    
    const checkLocationPermission = async () => { 
        let permissionStatus : PermissionStatus

        //La funcion check, revisa por defecto los permisos de la app, no se los pide al usuario
        //await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

        if(Platform.OS == 'ios') permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        else permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)

        setPermissions({ ...permissions, locationStatus: permissionStatus})
    }

    return(
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission
        }}>
            { children }
        </PermissionsContext.Provider>
    )
}


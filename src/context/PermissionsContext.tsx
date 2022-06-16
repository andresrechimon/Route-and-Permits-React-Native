import React, {createContext, useEffect, useState} from 'react';
import { AppState } from 'react-native';
import {check, openSettings, PERMISSIONS, PermissionStatus, request} from 'react-native-permissions';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

export const PermissionContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({children}: any) => {
    const [permissions, setPermissions] = useState(permissionInitState);

    useEffect(() => {
      AppState.addEventListener('change', state => {
        if(state !== 'active') return;
        checkLocationPermission();
      })
    }, [])
    

  const askLocationPermission = async() => {
    let permissionStatus: PermissionStatus;

    permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if(permissionStatus === 'blocked'){
      openSettings();
    }

    setPermissions({
        ...permissions,
        locationStatus: permissionStatus
    });
  };

  const checkLocationPermission = async() => {
    let permissionStatus: PermissionStatus;

    permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    setPermissions({
        ...permissions,
        locationStatus: permissionStatus
    });
  };


  return (
    <PermissionContext.Provider
      value={{
        permissions,
        askLocationPermission,
        checkLocationPermission,
      }}>
      {children}
    </PermissionContext.Provider>
  );
};

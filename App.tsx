import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { PermissionsProvider } from './src/context/PermissionsContext';

const AppState = ({children}:any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator/>
      </AppState>
    </NavigationContainer>
  )
}

export default App;
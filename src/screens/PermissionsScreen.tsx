import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PermissionContext } from '../context/PermissionsContext';
import { BlackButton } from '../components/BlackButton';

export const PermissionsScreen = () => {

  const {permissions, askLocationPermission} = useContext(PermissionContext)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Es necesario el uso de GPS para usar esta aplicación</Text>

        <BlackButton
        title='Permission'
        onPress={askLocationPermission}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      width: 250,
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20
    }
});
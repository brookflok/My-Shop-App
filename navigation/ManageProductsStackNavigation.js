import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Platform } from 'react-native'
import Colors from '../constants/Colors'

import AddProductScreen from '../screens/AddProductScreen'
import ManageProductScreen from '../screens/ManageProductsScreen'

const ManageProductsStackNavigation = props => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === "android" ? Colors.primaryColor : '#fff'
            },
            headerTitleStyle: {
                color: Platform.OS === "android" ? '#fff' : Colors.primaryColor
            },
            headerTintColor: Platform.OS === "android" ? '#fff' : Colors.primaryColor

        }}>
            <Stack.Screen name='Your Products' component={ManageProductScreen} />
            <Stack.Screen name='Edit' component={AddProductScreen} />
        </Stack.Navigator>
    )
}

export default ManageProductsStackNavigation
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Platform } from 'react-native'
import Colors from '../constants/Colors'
import OrdersScreen from '../screens/OrdersScreen'

const OrdersStackNavigation = props => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: Platform.OS ==="android" ? Colors.primaryColor : '#fff'
            },
            headerTitleStyle:{
                color:Platform.OS ==="android" ? '#fff' : Colors.primaryColor
            },
            headerTintColor: Platform.OS ==="android" ? '#fff' :Colors.primaryColor
            
        }}>
            <Stack.Screen name='Past Orders' component={OrdersScreen} />
        </Stack.Navigator>
    )
}

export default OrdersStackNavigation
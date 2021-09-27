import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import CartScreen from '../screens/CartScreen'
import { Platform } from 'react-native'
import Colors from '../constants/Colors'

const ShopStackNavigation = props => {
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
            <Stack.Screen name='Shop' component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    )
}

export default ShopStackNavigation
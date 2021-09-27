import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import ManageProductsStackNavigation from './ManageProductsStackNavigation';
import OrdersStackNavigation from './OrdersStackNavigation';
import ShopStackNavigation from './ShopStackNavigation';

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator   screenOptions={{
            headerShown: false}}>
            <Drawer.Screen name='Home' component={ShopStackNavigation}/>
            <Drawer.Screen name='Orders' component={OrdersStackNavigation}/>
            <Drawer.Screen name='Manage Products' component={ManageProductsStackNavigation}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;
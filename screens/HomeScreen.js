import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'

import HeaderButtonComponent from '../components/HeaderButtonComponent';
import ProductCardComponent from '../components/ProductCardComponent';
import ProductListComponent from '../components/ProductListComponent';
import { addToCart } from '../store/actions/productsAction';

const HomeScreen = props => {

    const products = useSelector(state => state.products.products)
    const cart = useSelector(state => state.products.cart)


    const dispatch = useDispatch()

    const CounterButton = props => {
        if (props.cart.length > 0) {
            const itemCounter = props.cart.reduce((prev, currrent) => {
                return prev + +currrent.quantity
            }, 0)
            return (
                <TouchableOpacity>
                <View style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    right: 10,
                    top: +10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: 'white' }}>{itemCounter}</Text>
                </View>
                </TouchableOpacity>
            )
        }
        else {
            return <View></View>
        }

    }

    //Setting some navigation options
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
                    <Item title="Cart" iconName="cart-outline" onPress={() => {
                        props.navigation.navigate('Cart')
                    }} />
                    <CounterButton cart={cart} />

                </HeaderButtons>
            ),
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
                    <Item title='Drawer' iconName='menu-sharp' onPress={() => {
                        props.navigation.openDrawer();
                    }} />
                </HeaderButtons>
            )
        })
    })

    //Product item Render for Flat List(ProductListComponent that we can parse navigation)
    const renderProductItem = itemData => {
        return (
            <ProductCardComponent
                imageUrl={itemData.item.imageUrl}
                title={itemData.item.name}
                leftButton="Details"
                leftButtonClick={() => {
                    props.navigation.navigate(
                        'ProductDetails',
                        {
                            productId: itemData.item.id
                        }
                    )
                }}
                price={itemData.item.price}
                rightButton="Add to cart"
                rightButtonClick={() => {
                    dispatch(addToCart(itemData.item.id))
                }}
            />
        )
    }



    return (
        <View style={styles.container}>
            <ProductListComponent listData={products} navigation={props.navigation} renderItem={renderProductItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeScreen;
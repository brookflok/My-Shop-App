import React from 'react'
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductCartComponent from '../components/ProductCartComponent';

import { buyProducts, removeFromCart } from '../store/actions/productsAction';

const CartScreen = props => {
    const cart = useSelector(state => state.products.cart)
    const totalPrice = cart.reduce((prev, currrent) => {
        return prev + +currrent.price * currrent.quantity
    }, 0)

    const dispatch = useDispatch()

    const renderProductItem = itemData => {
        return (
            <ProductCartComponent
                quantity={itemData.item.quantity}
                title={itemData.item.name}
                price={itemData.item.price}
                delete={() => {
                    dispatch(removeFromCart(itemData.item.id))
                }}
            />
        )
    }
    if (cart.length === 0) {
        return (
            <View style={styles.container}>
                <Text>The cart is emtpy you should buy something</Text>
                <Button title="Go back to the shop" onPress={() => {
                    props.navigation.popToTop()
                }} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>Sum: {totalPrice.toFixed(2)} $</Text>
                <Button title="Buy" onPress={() => {
                    dispatch(buyProducts())
                    props.navigation.popToTop()
                    Alert.alert(
                        "Thx for Shoping",
                        "Your order is procesed thx for buying with us. \n" +
                        "If you wish to see your order you can go to orders screen by pressing orders button.",
                        [
                            {
                                text: "Orders",
                                onPress: () => props.navigation.navigate('Orders'),
                                style: "cancel"
                            },
                            {
                                text: "Great",
                                onPress: () => console.log("Great Pressed"),
                                style: "cancel"
                            },
                        ]
                    );
                }} />
            </View>
            <FlatList style={{ width: '100%' }} data={cart} renderItem={renderProductItem} />
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


export default CartScreen;
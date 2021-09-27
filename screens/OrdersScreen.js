import React, { useLayoutEffect, useState } from 'react'
import { FlatList, Modal, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import HeaderButtonComponent from '../components/HeaderButtonComponent';
import PastOrderComponent from '../components/PastOrderComponent';

const OrdersScreen = props => {

    const previousOrders = useSelector(state => state.products.previousOrders)

    const [orderVisable, setOrderVisable] = useState(false)
    const [clickedOrder, setClickedOrder] = useState([])
    let index

    const renderOrders = itemData => {
        return (
            <PastOrderComponent
                totalPrice={itemData.item.price}
                date={itemData.item.date}
                onPress={() => {
                    index = previousOrders.map(orders => orders.orders).indexOf(itemData.item.orders)
                    setOrderVisable(true)
                    setClickedOrder(previousOrders[index])
                }}
            />
        )
    }

    const renderOrder = itemData => {
        return (
            <View style={styles.containerOrders}>
                <View style={styles.row}>
                    <Text>Product</Text>
                    <Text>{itemData.item.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text>Quantity</Text>
                    <Text>{itemData.item.quantity}</Text>
                </View>
                <View style={styles.row}>
                    <Text>Price</Text>
                    <Text>{itemData.item.price} $</Text>
                </View>
            </View>
        )
    }

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
                    <Item title='Drawer' iconName='menu-sharp' onPress={() => {
                        props.navigation.openDrawer();
                    }} />
                </HeaderButtons>
            )
        })
    })
    if (previousOrders.length === 0) {
        return (
            <View style={styles.container}>
                <Text>You did't have any purches go and buy something</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={orderVisable}
                onRequestClose={() => {
                    setOrderVisable(!orderVisable);
                }}>
                <FlatList data={clickedOrder.orders} renderItem={renderOrder} />
            </Modal>
            <FlatList keyExtractor={(item, index) => item.id} data={previousOrders} renderItem={renderOrders} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerOrders: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        borderWidth: 1,
        margin: 10,
        width: '90%'
    },
    row: {
        width: '30%',
        justifyContent: 'center',
        margin: 10
    }
})

export default OrdersScreen;
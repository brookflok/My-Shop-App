import React, { useLayoutEffect } from 'react'
import { Alert, StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';

import HeaderButtonComponent from '../components/HeaderButtonComponent';
import ProductCardComponent from '../components/ProductCardComponent';
import ProductListComponent from '../components/ProductListComponent';
import { deleteProduct } from '../store/actions/productsAction';


const ManageProductScreen = props => {

    const user = useSelector(state => state.products.user)
    const products = useSelector(state => state.products.products).filter(product => product.user === user)

    const dispatch = useDispatch()

    const renderProductItem = itemData => {
        return (
            <ProductCardComponent
                imageUrl={itemData.item.imageUrl}
                title={itemData.item.name}
                leftButton="Edit"
                leftButtonClick={() => {
                    props.navigation.navigate(
                        'Edit',
                        {
                            productId: itemData.item.id
                        }
                    )
                }}
                price={itemData.item.price}
                rightButton="Delete"
                rightButtonClick={() => {
                    Alert.alert(
                        "Deleting an item",
                        "You are deleting an item from the shop are you sure that you wish to dele it?",
                        [
                            {
                                text: "No",
                                onPress: () => console.log("No Pressed"),
                                style: "cancel"
                            },
                            {
                                text: "Yes",
                                onPress: () => dispatch(deleteProduct(itemData.item.id)),
                                style: "cancel"
                            },

                        ]
                    )
                }}
            />
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
            ),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
                    <Item title="Edit" iconName="add-circle-outline" onPress={() => {
                        props.navigation.navigate('Edit', {

                        })
                    }} />
                </HeaderButtons>
            )
        })
    })

    return (
        <View style={styles.container}>
            <ProductListComponent listData={products} navigation={props.navigation} renderItem={renderProductItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default ManageProductScreen;
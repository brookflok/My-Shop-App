import React, { useLayoutEffect } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import PRODUCTS from '../data/dummy-data-shop';
import { addToCart } from '../store/actions/productsAction';

const ProductDetailsScreen = props => {
    const productId = props.route.params.productId
    const selectedProduct = PRODUCTS.find(product => product.id === productId)

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: selectedProduct.name
        })
    })

    return (
        <View style={styles.container}>
            <Image source={{ uri: selectedProduct.imageUrl }} style={styles.bgImage} />
            <Text>This is {selectedProduct.name}</Text>
            <Text>{selectedProduct.description}</Text>
            <Text>Price : {selectedProduct.price}</Text>
            <Button title='buy' onPress={() => {
                dispatch(addToCart(productId))
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    bgImage: {
        width: '100%',
        height: '20%',
        justifyContent: 'flex-start'

    },
})


export default ProductDetailsScreen;
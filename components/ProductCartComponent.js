import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';


const ProductCartComponent = props => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.product}>
                    <Text style={styles.quantity}>{props.quantity}X</Text>
                    <Text numberOfLines={2}>{props.title}</Text>
                </View>
                <View style={styles.priceProduct}>
                    <Text>{props.price} $</Text>
                    <View style={styles.deleteButton}>
                        <Button title={'Delete'} onPress={props.delete} />
                    </View>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    product: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    quantity: {
        marginHorizontal: 10
    },
    priceProduct: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    deleteButton: {
        height: '50%'
    }
})

export default ProductCartComponent;
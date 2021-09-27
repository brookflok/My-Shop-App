import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const PastOrderComponent = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <View style={styles.priceContainer}>
                    <Text>Total price</Text>
                    <Text>
                        {props.totalPrice.toFixed(2)} $
                    </Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text>Date of order</Text>
                    <Text>
                        {props.date}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 15,
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceContainer: {
        width: '70%'
    },
    dateContainer: {
        width: '30%'
    }
})

export default PastOrderComponent;
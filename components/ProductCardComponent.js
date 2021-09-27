import React from 'react'
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductCardComponent = props => {
    return (
        <View style={styles.productItem}>
            <TouchableOpacity onPress={props.leftButtonClick}>
                <View style={{ ...styles.row, ...styles.imageContainer }}>
                    <ImageBackground source={{ uri: props.imageUrl }} style={styles.bgImage}>
                        <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.row, ...styles.details }}>
                    <View style={styles.button}>
                        <Button title={props.leftButton} onPress={props.leftButtonClick} />
                    </View>
                    <Text style={styles.price}>{props.price} $</Text>
                    <View style={styles.button}>
                        <Button title={props.rightButton} onPress={props.rightButtonClick} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    productItem: {
        height: 200,
        width: '100%',
        backgroundColor: "#ccc",
    },
    row: {
        flexDirection: 'row'
    },
    imageContainer: {
        height: '70%'
    },
    details: {
        height: '30%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 20,
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    },
    price: {
        fontSize: 16,
    },
    button: {
        width: '30%'
    }
})

export default ProductCardComponent;
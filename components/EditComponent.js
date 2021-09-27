import React from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, Button } from 'react-native';

const EditComponent = props => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Product Name</Text>
            <TextInput style={styles.input}
                onChangeText={props.setProductName}
                value={props.productName} />
            <Text>Product Description</Text>
            <TextInput style={styles.input} multiline numberOfLines={6}
                onChangeText={props.setProductDescription}
                value={props.productDescription} />
            <Text>Product Price</Text>
            <TextInput keyboardType="number-pad" style={styles.input}
                onChangeText={props.setProductPrice}
                value={props.productPrice} />
            <Text>Product Image URL</Text>
            <TextInput style={styles.input}
                onChangeText={props.setproductImageUrl}
                value={props.productImageUrl} />
            <Button title="Save item" onPress={props.saveItem} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 28,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    input: {
        marginVertical: 5,
        width: '100%',
        borderWidth: 1,
        padding: 10,
    },
})

export default EditComponent;
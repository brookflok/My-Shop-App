import React, { useRef, useState } from 'react'
import { render } from 'react-dom';
import { SafeAreaView, StyleSheet, Text, TextInput, Button } from 'react-native';
import Input from './Atom/Input';


const EditComponent = props => {
    const descriptionRef = useRef();
    const priceRef = useRef()
    const imageRef = useRef()

    const [productNameIsValid, setProductNameIsValid] = useState(true)
    const [productDescriptionIsValid, setProductDescriptionIsValid] = useState(true)
    const [productImageUrlIsValid, setProductImageUrlIsValid] = useState(true)


    return (
        <SafeAreaView style={styles.container}>
            <Input
                label="Product Name"
                onChangeText={props.setProductName}
                value={props.productName}
                placeholder="Description"
                isValid={productNameIsValid}
                error={'Please input product name'}
                returnKeyType='next'
                onKeyPress={() => {
                    setProductNameIsValid(props.productNameIsValid)

                }}
                onSubmitEditing={() => {
                    descriptionRef.current.focus()
                }}
            />
            <Input
                label="Product Decription"
                onChangeText={props.setProductDescription}
                value={props.productDescription}
                placeholder="Description"
                isValid={productDescriptionIsValid}
                error={'Please input product description'}
                returnKeyType='next'
                multiline={true}
                numberOfLines={4}
                blurOnSubmit={true}
                reference={descriptionRef}
                onKeyPress={() => {
                    setProductDescriptionIsValid(props.productDescriptionIsValid)
                }}
                onSubmitEditing={() => {
                    priceRef.current.focus()
                }}
            />
            <Input
            
                label="Product price"
                onChangeText={props.setProductPrice}
                value={props.productPrice}
                placeholder="Price"
                keyboardType="numeric"
                isValid={true}
                returnKeyType='next'
                reference={priceRef}
                onSubmitEditing={() => {
                    imageRef.current.focus()
                }}
            />
            <Input
                label="Product Image"
                onChangeText={props.setproductImageUrl}
                value={props.productImageUrl}
                placeholder="Image URL"
                isValid={productImageUrlIsValid}
                error={'Please input product image URL'}
                returnKeyType='next'
                reference={imageRef}
                onKeyPress={() => {
                    setProductImageUrlIsValid(props.productImageIsValid)
                }}
            />
            <Button title="Save item" onPress={props.saveItem} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 28,
    }
})

export default EditComponent;
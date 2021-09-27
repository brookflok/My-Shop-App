import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EditComponent from '../components/EditComponent';
import Product from '../models/product';
import { addProduct } from '../store/actions/productsAction';
import { useFocusEffect } from '@react-navigation/native'

const AddProductScreen = props => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const user = useSelector(state => state.products.user)
    //Id generator
    const id = products.length + 1
    let editProduct = new Product('', '', '', '', '', 0)
    let editProductId

    if (props.route.params.productId) {
        editProductId = props.route.params.productId
        editProduct = products.filter(product => product.id === editProductId)[0]
    }

    const [productId, setProductId] = useState(editProduct.id)
    const [productName, setProductName] = useState(editProduct.name)
    const [productDescription, setProductDescription] = useState(editProduct.description)
    const [productPrice, setProductPrice] = useState(editProduct.price.toString())
    const [productImageUrl, setproductImageUrl] = useState(editProduct.imageUrl)

    useFocusEffect(
        useCallback(() => {
            if (productId === '') {
                setProductId("p" + id)
                props.navigation.setOptions({
                    title: 'Add'
                })
            }
        }, [productId])
    )

    return (
        <EditComponent setProductName={setProductName}
            productName={productName}
            setProductDescription={setProductDescription}
            productDescription={productDescription}
            setProductPrice={setProductPrice}
            productPrice={productPrice}
            setproductImageUrl={setproductImageUrl}
            productImageUrl={productImageUrl}
            saveItem={() => {
                const product = new Product(productId, user, productName, productImageUrl, productDescription, productPrice)
                dispatch(addProduct(product))
                props.navigation.popToTop()
            }
            }
        />

    );
}



export default AddProductScreen;
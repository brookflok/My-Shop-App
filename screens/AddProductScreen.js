import React, { useReducer } from 'react'
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EditComponent from '../components/EditComponent';
import Product from '../models/product';
import { addProduct } from '../store/actions/productsAction';

const formReducer = (state, action) => {
    if (action.type === "UPDATE") {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const updateValidities = {
            ...state.inputValidate,
            [action.input]: action.isValid
        }
        let updateFormIsValid = true
        for (const key in updateValidities) {
            updateFormIsValid = updateFormIsValid && updateValidities[key]
        }
        return {
            formIsValid: updateFormIsValid,
            inputValidate: updateValidities,
            inputValues: updatedValues
        }
    }
    return state
}

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

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            productId: editProduct.id !== '' ? editProduct.id : "p" + id,
            productName: editProduct.name,
            productDescriptions: editProduct.description,
            productPrice: editProduct.price,
            productImageUrl: editProduct.imageUrl
        },
        inputValidate: {
            productName: editProduct.name !== '' ? true : false,
            productDescriptions: editProduct.description !== '' ? true : false,
            productPrice: editProduct.price !== 0 ? true : false,
            productImageUrl: editProduct.imageUrl !== '' ? true : false,
        },
        formIsValid: editProduct.id !== '' ? true : false
    })


    const textChangeHanddler = (inputIdentifier, text) => {
        let isValid = false
    
        if (text.trim().length > 0) {
            isValid = true
        }
        dispatchFormState({
            type: 'UPDATE',
            value: text,
            isValid: isValid,
            input: inputIdentifier
        })
    }

    return (
        <EditComponent
            setProductName={textChangeHanddler.bind(this, 'productName')}
            productName={formState.inputValues.productName}
            productNameIsValid={formState.inputValidate.productName}

            setProductDescription={textChangeHanddler.bind(this, 'productDescriptions')}
            productDescription={formState.inputValues.productDescriptions}
            productDescriptionIsValid={formState.inputValidate.productDescriptions}

            setProductPrice={textChangeHanddler.bind(this, 'productPrice')}
            productPrice={formState.inputValues.productPrice.toString()}
            productPriceIsValid={formState.inputValidate.productPrice}

            setproductImageUrl={textChangeHanddler.bind(this, 'productImageUrl')}
            productImageUrl={formState.inputValues.productImageUrl}
            productImageIsValid={formState.inputValidate.productImageUrl}

            isValid={formState.formIsValid}
            saveItem={() => {
                if (formState.formIsValid) {
                    const product = new Product(
                        formState.inputValues.productId,
                        user,
                        formState.inputValues.productName,
                        formState.inputValues.productImageUrl,
                        formState.inputValues.productDescriptions,
                        formState.inputValues.productPrice)
                    dispatch(addProduct(product))
                    props.navigation.popToTop()
                } else {
                    Alert.alert('Error', "Please input all the fields")
                }

            }
            }
        />

    );
}



export default AddProductScreen;
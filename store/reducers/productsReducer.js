import PRODUCTS from "../../data/dummy-data-shop";
import { ADD_PRODUCT, ADD_TO_CART, BUY_PRODUCTS, DELETE_PRODUCT, MY_PRODUCTS, REMOVE_FROM_CART } from "../actions/productsAction";

const initialState = {
    user: 'u1',
    products: PRODUCTS,
    cart: [],
    previousOrders: [],
}


const productReducer = (state = initialState, action) => {
    let updatedProducts = [...state.products]
    let updatedCart = [...state.cart]

    switch (action.type) {
        case ADD_TO_CART:
            const selectedProduct = state.products.find(product => product.id === action.productId)
            //Check if the product is in the cart
            if (state.cart.some(product => product.id === selectedProduct.id)) {
                const index = state.cart.findIndex(product => product.id === selectedProduct.id)
                state.cart[index].quantity++
                return { ...state, cart: updatedCart }
            } else {
                selectedProduct.quantity = 1
                updatedCart = [...updatedCart, selectedProduct]
                return { ...state, cart: updatedCart }
            }
        case REMOVE_FROM_CART:
            const product = state.products.find(product => product.id === action.productId)
            const index = updatedCart.indexOf(product)
            const productIndex = updatedProducts.indexOf(product)

            product.quantity = 0

            updatedProducts[productIndex] = product
            updatedCart.splice(index, 1)

            return { ...state, cart: updatedCart, products: updatedProducts }

        case BUY_PRODUCTS:
            const totalPrice = state.cart.reduce((prev, currrent) => {
                return prev + +currrent.price * currrent.quantity
            }, 0)
            const orders = state.cart
            var today = new Date();
            var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
            let updatedPreviousOrders = [...state.previousOrders, { orders, date: date, price: totalPrice, id: state.previousOrders.length.toString() }]
            updatedCart = []

            return { ...state, cart: updatedCart, previousOrders: updatedPreviousOrders }

        case ADD_PRODUCT:
            const newProduct = action.product
            if (state.products.some(product => product.id === newProduct.id)) {
                const editIndex = state.products.findIndex(product => product.id === newProduct.id)
                updatedProducts[editIndex] = newProduct
                return { ...state, products: updatedProducts }
            }
            updatedProducts = [...updatedProducts, newProduct]
            return { ...state, products: updatedProducts }

        case DELETE_PRODUCT:
            const deleteProductId = action.productId
            const deleteIndex = state.products.findIndex(product => product.id === deleteProductId)
            updatedProducts.splice(deleteIndex, 1)
            return { ...state, products: updatedProducts }

        default:
            return state
    }
}

export default productReducer
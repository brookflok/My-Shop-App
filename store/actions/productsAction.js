export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const BUY_PRODUCTS = "BUY_PRODUCTS"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const DELETE_PRODUCT = "DELETE_PRODUCT"

export const addToCart = (id) => {
    return { type: ADD_TO_CART, productId: id }
}

export const removeFromCart = (id) => {
    return { type: REMOVE_FROM_CART, productId: id }
}

export const buyProducts = () => {
    return { type: BUY_PRODUCTS }
}

export const addProduct = (newProduct) => {
    return { type: ADD_PRODUCT, product: newProduct }
}

export const deleteProduct = (id) => {
    return { type: DELETE_PRODUCT, productId: id }
}
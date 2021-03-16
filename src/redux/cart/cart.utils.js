export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if (existingCartItem) {
        //Need to use .map beause we want a new array!
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
        )
    }
    // Cart item not already in card to add new cartItem object with quantity 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
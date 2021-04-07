import { CartActionTypes } from './cart.types';
import { toggleCartHidden, addItem, clearItemFromCart, removeItem, clearCart} from './cart.actions';


describe('Cart Action tests', () => {
    const mockItem = {
        id: 1
    };
    
    it('should create toggleHidden action', () => {
        expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
    });

    it('should create addItem action and check type and payload', () => {
        expect.assertions(2);
        const action = addItem(mockItem);
        expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
        expect(action.payload).toEqual(mockItem);
    });

    it('should create clearItemFromCart action and check type and payload', () => {
        expect.assertions(2);
        const action = clearItemFromCart(mockItem);
        expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
        expect(action.payload).toEqual(mockItem);
    });

    it('should create removeItem action and check type of payload', () => {
        expect.assertions(2);
        const action = removeItem(mockItem);
        expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
        expect(action.payload).toEqual(mockItem);
    })

    it('should create clearCart action and check type', () => {
        const action = clearCart();
        expect(action.type).toEqual(CartActionTypes.CLEAR_CART);
    })
});
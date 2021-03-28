import { CartReducer } from './CartReducer'
import { CartAction, AddProductAction } from './CartAction'

describe(CartReducer.name, () => {
    it('initial value', () => {
        const state = CartReducer({ products: {} }, {} as CartAction)
        expect(state).toEqual({ products: [] })
    })
});

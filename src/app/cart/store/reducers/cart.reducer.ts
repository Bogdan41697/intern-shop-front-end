
import { Product } from '../../../shared/models/product.model';
import * as fromCart from './../actions';
export interface CartItem {
    product: Product;
    quantity: number;
}
export interface CartState {
    isEmpty: boolean;
    ids: string[];
    products: { [id: string]: CartItem };
    totalCount: number;
    totalSum: number;
}

export const initialCartState: CartState = {
    isEmpty: true,
    ids: ['1', '2'],
    products: {
        '1': {
            product: {
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/41PhxnsPE4L._SX327_BO1,204,203,200_.jpg',
                id: '1',
                title: 'product',
                description: 'product',
                stock: 1,
                price: 99.99,
                category_id: 'asdsadad',
                category_title: 'asdasdasd'

            },
            quantity: 2
        },
        '2': {
            product: {
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/41PhxnsPE4L._SX327_BO1,204,203,200_.jpg',
                id: '1',
                title: 'product',
                description: 'product',
                stock: 1,
                price: 99.99,
                category_id: 'asdsadad',
                category_title: 'asdasdasd'
            },
            quantity: 1
        }
    },
    totalCount: 3,
    totalSum: 297.99
};

export function reducer( state: CartState = initialCartState, action: fromCart.Actions): CartState {
    switch (action.type) {
        case fromCart.ADD_TO_CART: {
            const id: string = action.payload['product'].id;
            const prevQuantity: number = state.products[id] ? state.products[id].quantity : 0;
            const newQuantity: number = prevQuantity + action.payload['quantity'];

            const additionalSum: number = action.payload['quantity'] * Number(action.payload['product'].price);

            return {
                ...state,
                isEmpty: false,
                ids: [...state.ids, id],
                products: {
                    [id]: {
                        ...state.products[id],
                        product: action.payload['product'],
                        quantity: newQuantity
                    }
                },
                totalCount: state.totalCount + action.payload['quantity'],
                totalSum: state.totalSum + additionalSum
            };
        }
        case fromCart.DECREASE: {
            const id: string = <string>action.payload;

            return {
                ...state,
                isEmpty: false,
                products: {
                    ...state.products,
                    [id]: {
                        ...state.products[id],
                        quantity: state.products[id].quantity - 1
                    }
                },
                totalSum: state.totalSum - Number(state.products[id].product.price),
                totalCount: state.totalCount - 1,
            };
        }
        case fromCart.INCREASE: {
            const id: string = <string>action.payload;

            return {
                ...state,
                isEmpty: false,
                products: {
                    ...state.products,
                    [id]: {
                        ...state.products[id],
                        quantity: state.products[id].quantity + 1
                    }
                },
                totalSum: state.totalSum + Number(state.products[id].product.price),
                totalCount: state.totalCount + 1
            };
        }
        case fromCart.REMOVE_PRODUCT_FROM_CART: {
            const id: string = state.ids.find((t_id: string) => t_id === action['payload']);

            state.ids.splice(state.ids.indexOf(id), 1);
            state.totalCount = state.totalCount - state.products[id].quantity;
            state.totalSum = (state.totalSum - (state.products[id].quantity * Number(state.products[id].product.price))) + 1.98;
            delete state.products[id];

            const newstate: any = {
               ...state
            };

            return newstate;
        }

        case fromCart.CLEAR_CART: {
            return {
                isEmpty: true,
                ids: [],
                products: {},
                totalCount: 0,
                totalSum: 0
            };
        }
        default:
            return state;
    }
}

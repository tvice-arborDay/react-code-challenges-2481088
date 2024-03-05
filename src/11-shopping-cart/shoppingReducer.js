export function shoppingReducer(state, action) {

    function buildCartItem(item, quantity) {
        return { name: item.name, price: item.price, quantity: quantity }
    }

    function calculateTotalPrice(cart) {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.quantity*item.price;
        });
        return totalPrice;
    }

    switch (action.type) {
        case 'add-item': {
            // takes type, item, and quantity in action
            if (state.cart.find(item => item.name === action.item.name)) return {...state}
            const newCart = [...state.cart, buildCartItem(action.item, action.quantity)];
            return {cart: newCart, totalPrice: calculateTotalPrice(newCart)}
        }
        case 'remove-item': {
            // takes type and itemName in action
            let newCart = [...state.cart];
            newCart = newCart.filter(item => item.name !== action.itemName);
            return {cart: [...newCart], totalPrice: calculateTotalPrice(newCart)};
        }
        case 'change-item-quantity': {
            // takes type, itemName, and quantityChange in action
            const index = state.cart.findIndex(item => item.name === action.itemName);
            const newCart = state.cart.map((item, i) => {
                if (i === index) return {...item, quantity: item.quantity+action.quantityChange};
                else return item;
            });
            return {cart: [...newCart], totalPrice: calculateTotalPrice(newCart)};
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
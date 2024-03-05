import { useReducer, useState } from 'react'
import { shoppingReducer } from './shoppingReducer.js'

const initialCartState = {cart: [], totalPrice: 0}

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

function ShoppingCart () {
  const [state, dispatch] = useReducer(shoppingReducer, initialCartState);

  function removeItem(cartItem, removeQuantity) {
    if (cartItem.quantity - removeQuantity > 0) dispatch({
      type: 'change-item-quantity', 
      itemName: cartItem.name,
      quantityChange: -1*removeQuantity
    })
    else dispatch({
      type: 'remove-item',
      itemName: cartItem.name
    })
  }

  function addItem(item, quantityChange) {
    const cartCopy = [...state.cart];
    const existingItem = cartCopy.find(cartItem => cartItem.name === item.name);
    if (existingItem) dispatch({
      type: 'change-item-quantity',
      itemName: item.name,
      quantityChange: quantityChange
    })
    else dispatch({
      type: 'add-item',
      item: item,
      quantity: quantityChange
    })
  }

  function emptyCart() {
    state.cart.forEach(item => {
      removeItem(item, item.quantity);
    });
  }


  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${Number(item.price.toFixed(2))}</p>
              <button onClick={() => addItem(item, 1)}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {state.cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => removeItem(item, 1)}>-</button>
                {item.quantity}
                <button onClick={() => addItem(item, 1)}>+</button>
              </p>
              <p>Subtotal: ${Number((item.quantity * item.price).toFixed(2))}</p>
            </div>
          ))}
          <button onClick={() => emptyCart()}>Empty Cart</button>
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${Number(state.totalPrice.toFixed(2))}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart

import {useState} from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {  
    const [addItems, setAddItems] = useState({
        items: [],
        totalAmount: 0
    });

    const addItemToCartHandler = (item) => {
        const updatedItems = addItems.items.concat(item);
        const updatedTotalAmount = addItems.totalAmount + item.price * item.amount;
        setAddItems({
            items: updatedItems,
            totalAmount: updatedTotalAmount
        })
    };
  
    const removeItemFromCartHandler = (id) => {
      
    };
  
    const cartContext = {
      items: addItems.items,
      totalAmount: addItems.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
};
  
export default CartProvider;
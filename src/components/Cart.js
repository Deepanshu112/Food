import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <div className="menu">
                <div className="Cart-Inner">
                    <h1>Cart</h1>
                    <button
                        className="clear-cart"
                        onClick={handleClearCart}
                    >Clear Cart</button>
                </div>
                
                <div className="Restaurant-dropdown-parent">
                    <div className="Restaurant-dropdown">
                        {cartItems.length === 0 && <h2> It seems like you haven't add anything to the Cart yet </h2>}
                        <ItemList items={cartItems}/>
                    </div>                
                </div>
            </div>
            
            
        </div>
    )    
};

export default Cart;
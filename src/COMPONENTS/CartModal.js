import React from "react";
import '../CSS/CartModal.css';
import { BsXLg } from "react-icons/bs";

export default function CartModal({setCartModalValue, cartContent, setCartContent}) {
    return (
        <div className="main-modal-cart">
            <div className="title-container-cart">
            <h2 className="title-cart">Cart</h2>
            <BsXLg className="btn-close-cart" onClick={() => setCartModalValue(false)}/>
            </div>
            <div className="cart-items-container">
                {cartContent === 0 ? 
                  <span className="span-empty-cart">You cart is empty.</span> :
                  <p>Compraste x {cartContent}</p>
                }
            </div>
        </div>
    )
}
import React from "react";
import '../CSS/CartModal.css';

export default function CartModal({setCartModalValue}) {
    return (
        <div className="main-modal-cart" onClick={() => setCartModalValue(false)}>
            <h2 className="title-cart">Cart</h2>
            <div className="cart-items-container">
                <span className="span-empty-cart">You cart is empty.</span>
            </div>
        </div>
    )
}
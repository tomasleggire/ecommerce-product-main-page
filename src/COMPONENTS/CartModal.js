import React from "react";
import '../CSS/CartModal.css';
import { BsXLg } from "react-icons/bs";

export default function CartModal({setCartModalValue}) {
    return (
        <div className="main-modal-cart">
            <div className="title-container-cart">
            <h2 className="title-cart">Cart</h2>
            <BsXLg className="btn-close-cart" onClick={() => setCartModalValue(false)}/>
            </div>
            <div className="cart-items-container">
                <span className="span-empty-cart">You cart is empty.</span>
            </div>
        </div>
    )
}
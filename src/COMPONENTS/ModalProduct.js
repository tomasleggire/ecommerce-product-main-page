import React from "react";
import '../CSS/ModalProduct.css';

export default function ModalProduct({ setModalValue }) {
    return (
        <div className="main-modal-container">
            <div className="main-modal">
                <button onClick={() => setModalValue(false)}>x</button>
            </div>
        </div>
    )
}
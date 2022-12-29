import React from "react";
import '../CSS/PhotoGallery.css';

export default function PhotoGallery({items, focusItem, setFocusItem}) {
    return (
        <div className="main-gallery">
            <div className="main-photo-gallery">
                <img src={focusItem.img} />
            </div>
            <div className="options-container">
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
                <div className="option"></div>
            </div>
        </div>
    )
}
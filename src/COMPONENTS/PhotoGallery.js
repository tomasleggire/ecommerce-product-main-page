import React from "react";
import '../CSS/PhotoGallery.css';

export default function PhotoGallery({items, focusItem}) {
    return (
        <div className="main-gallery">
            <div className="main-photo-gallery">
                <img src={focusItem.img} />
            </div>
            <div className="options-container">
                {items.map((item) => {
                    return (
                        <div className={`option ${item.id === focusItem.id ? 'border' : ''}`} key={item.id}>
                            <img src={item.min} className={`${item.id === focusItem.id ? 'selected' : ''}`}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
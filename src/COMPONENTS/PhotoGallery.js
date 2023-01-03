import React from "react";
import '../CSS/PhotoGallery.css';
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

export default function PhotoGallery({items, focusItem, changeFocus}) {
    return (
        <div className="main-gallery">
            <div className="main-photo-gallery">
                <img src={focusItem.img} />
                <div className="btn-scroll-container">
                    <BiChevronLeft className="btn-scroll izq"/>
                    <BiChevronRight className="btn-scroll der"/>
                </div>
            </div>
            <div className="options-container">
                {items.map((item) => {
                    return (
                        <div 
                          className={`option ${item.id === focusItem.id ? 'border' : ''}`}
                          key={item.id}
                          onClick={() => changeFocus(item.id)}
                        >
                          <img src={item.min} className={`${item.id === focusItem.id ? 'selected' : ''}`}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
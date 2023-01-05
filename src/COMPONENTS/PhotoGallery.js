import React from "react";
import '../CSS/PhotoGallery.css';
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

export default function PhotoGallery({items, focusItem, changeFocus, changeFocusIzq, changeFocusDer}) {
    return (
        <div className="main-gallery">
            <div className="main-photo-gallery">
                <img src={focusItem.img} />
                <div className="btn-scroll-container">
                    <BiChevronLeft 
                      className={`btn-scroll izq ${focusItem.id === 1 ? 'disabled' : ''}`}
                      onClick={changeFocusIzq}
                    />
                    <BiChevronRight
                      className={`btn-scroll der ${focusItem.id === 4 ? 'disabled' : ''}`}
                      onClick={changeFocusDer}
                      disabled
                    />
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
                          <img src={item.min} className={`${item.id === focusItem.id ? 'selected' : ''} img-option`}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
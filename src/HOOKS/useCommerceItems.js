import React, {useState} from "react";
import Product1 from '../IMAGES/image-product-1.jpg';
import Product2 from '../IMAGES/image-product-2.jpg';
import Product3 from '../IMAGES/image-product-3.jpg';
import Product4 from '../IMAGES/image-product-4.jpg';
import ProductMin1 from '../IMAGES/image-product-1-thumbnail.jpg';
import ProductMin2 from '../IMAGES/image-product-2-thumbnail.jpg';
import ProductMin3 from '../IMAGES/image-product-3-thumbnail.jpg';
import ProductMin4 from '../IMAGES/image-product-4-thumbnail.jpg';

export default function useCommerceItems() {

    const [items, setItems] = useState([
        {
            id: 1,
            img: Product1,
            min: ProductMin1
        },
        {
            id: 2,
            img: Product2,
            min: ProductMin2
        },
        {
            id: 3,
            img: Product3,
            min: ProductMin3
        },
        {
            id: 4,
            img: Product4,
            min: ProductMin4
        },
    ])

    const [focusItem, setFocusItem] = useState({
        id: 1,
        img: Product1,
        min: ProductMin1,
        price: 125
    })

    return [items, focusItem, setFocusItem];
}
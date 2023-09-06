import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import "./shop.css";
 

 
export const Shop = () => {
    return (
        <div className='shop'>
            <div className="shopTitle">
                <h1><span className="blue">SCENTS</span><span
                    className="white">BY</span><span className="green">LADYP</span></h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    )
}

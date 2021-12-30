import Product from '../product/Product'
import './productlist.css'
import {products} from '../../data'
import { useState } from 'react'

const ProductList = () => {
    return (
        <div className='productlist'> 
            <div className="pl-texts">
                <h2 className="productlist_title">
                    Create & inspire. It's David
                </h2>
                <p className="productlist_desc">
                    David is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles & a whole lot more awaits inside.
                </p>
            </div>
             <div className="product-list">
                {products.map((data) => (
                    <Product key={data.id} img={data.img}/>          
                ))}
             </div>
        </div>
    )
}

export default ProductList

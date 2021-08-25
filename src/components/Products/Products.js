import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const productPeram = {
        p: 1,
        search: '',
    }
    useEffect(()=>{
        fetch('https://strofesapps.live/challenge/products/get-all-products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productPeram)
        })
            .then(res => res.json())
            .then(result => {
                setProducts(result.data)
                console.log(products);
            })
    },)
    
    return (
        <div className="row mt-5">
            {products.map( product => <Product product={product}></Product>)}
        </div>
    );
};

export default Products;
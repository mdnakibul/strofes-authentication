import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId} = useParams();
    const [productDetails,setProductDetails] = useState()
    useEffect(()=>{
        fetch(`https://strofesapps.live/challenge/products/get-one-product/${productId}`)
        .then(res => res.json())
        .then(data => {
            setProductDetails(data);
            console.log(productDetails);
        })
    },[productId,productDetails])
    return (
        
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p>{productId}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
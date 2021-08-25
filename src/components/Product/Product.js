import React from 'react';
import { useHistory } from 'react-router-dom';

const Product = (props) => {
    const history = useHistory();
    const productData = props.product;
    const productInfo = (productId) => {
        history.push(`/products/${productId}`);

    }



    setTimeout(() => {
        const productDescription = document.getElementById('product-desc') || null;
        if (productDescription !== null) {
            productDescription.innerHTML = productData.description
        }

    }, 1000)
    return (
        <div className="col-md-4">
            <div class="card" >
                <img src={productData.images[0]} class="card-img-top" alt="product" />
                <div class="card-body">
                    <h5 class="card-title">{productData.product_name}</h5>
                    <p class="card-text" id="product-desc"></p>
                    <button className="btn btn-primary" onClick={() => productInfo(productData._id)}>See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
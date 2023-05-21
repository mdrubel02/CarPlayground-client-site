import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const services = useLoaderData().data
    console.log(services);
    return (
        <div>
            <h1>this is product details page</h1>
        </div>
    );
};

export default ProductDetails;
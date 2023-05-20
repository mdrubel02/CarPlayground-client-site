import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShortProductItems = ({ serviceItem }) => {
    const { rating, price, service, picture, description, _id } = serviceItem
    const navigate = useNavigate()

    const ratingArray = []
    for (let i = 0; i < rating; i++) {
        ratingArray.push(<FaStar className='text-yellow text-[15px]'></FaStar>)
    }
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default ShortProductItems;
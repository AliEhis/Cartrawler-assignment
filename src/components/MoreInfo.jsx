import React from 'react';
import { plurarize } from '../functions';

const MoreInfo = ({ product: { product, category } }) => {
    return (
        <>
            <p>
                <strong>Max Passengers:</strong> { `${product.maxPax} person${plurarize(product.maxPax)}` } <br />
                <strong>Max Baggages:</strong> { `${product.bags.max} bag${plurarize(product.bags.max)}` } <br /> 
                <strong>Max Seats:</strong> { `${product.maxSeats} seat${plurarize(product.maxSeats)}` }
            </p>
            <p>
                <strong>Note:</strong> { category.subCategory }
            </p>
        </>
    )
}

export default MoreInfo

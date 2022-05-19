import React from 'react';
import { useNavigate } from 'react-router-dom';
import { plurarize, getSupplierLogo, getVehicleImage } from '../functions';


const ProductItem = ({ product }) => {
    let navigate = useNavigate();

    const changeRoute = (e) => {
        e.preventDefault();
        navigate(`/product-details/${product.availabilityId}`, { state: product });
    }

    return (
        <>
            <div className="card mb-4" onClick={(e) => changeRoute(e)} key={product.availabilityId}>
                <img src={getVehicleImage(product.category.productType, product.category.vehicleType)} className="card-img-top" alt={`${product.category.vehicleType} vehicle`} />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title m-0">{product.supplier.supplierName}</h5>
                        <p className="card-text"><small className="text-muted">{ `ETA: ${product.eta} min${plurarize(product.eta)}` }</small></p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text m-0">
                            <small><i>{`${product.category.productType} ${product.category.vehicleType}`}</i></small>
                        </p>
                        <p className="card-text">
                            <small><i>{`${product.price.currency} ${product.price.amount}`}</i></small>
                        </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <img className="img-fluid w-10" src={getSupplierLogo(product.supplier.supplierKey)} alt="Supplier logo" />
                        <span>
                            {product.product.maxPax} <i className="fas fa-users"></i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem

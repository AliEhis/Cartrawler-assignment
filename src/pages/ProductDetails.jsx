import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import MoreInfo from '../components/MoreInfo';
import Navbar from '../components/Navbar';
import { plurarize, getSupplierLogo, getVehicleImage } from '../functions';

const ProductDetails = () => {
    const location = useLocation();
    const [product] = useState(location.state);
    const [moreInfo, setMoreInfo] = useState(false);

    const toggleInfo = (e) => {
        e.preventDefault();
        setMoreInfo(!moreInfo);
    }

    return (
        <>
            <Navbar />
            <section id="product-details" className="mt-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-4">
                            <div className="car-image">
                                <img src={getVehicleImage(product.category.productType, product.category.vehicleType)} className="img-fluid d-block mx-auto" alt={product.supplier.supplierName} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="car-details">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h2 className="mb-0">{product.supplier.supplierName}</h2>
                                    <img className="img-fluid w-10" src={getSupplierLogo(product.supplier.supplierKey)} alt="Supplier logo" />
                                </div>
                                <p>
                                    <strong>ETA:</strong> {`${product.eta} min${plurarize(product.eta)}`} <br />
                                    <strong>Price:</strong> {`${product.price.currency} ${product.price.amount}`} <br />
                                    <strong>Category:</strong> <small><i>{`${product.category.productType} ${product.category.vehicleType}`}</i></small>
                                </p>
                                {
                                    moreInfo && (
                                        <MoreInfo product={product} />
                                    )
                                }
                                <a href={`/`} onClick={(e) => toggleInfo(e)} class="card-link">
                                    {moreInfo ? 'Less Info' : 'More Info'}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-md-4">
                            <Link to={`/`}>Back to List</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails

import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { publicRequest } from '../functions/axiosInstance';
import Loader from './Loader';
import { capitalizeFirstLetter } from '../functions';

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [productBrands, setProductBrands] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        try {
            setLoading(true);
            const response = await publicRequest('mobility-react-native-assessment/master/assets/availability.json');
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            alert('Something went wrong, please reload the page');
            setLoading(false);
        }
    }

    const sortETAOption = (e) => {
        const { value } = e.target;
        if (value === "asc") {
            setSortedProducts(prevState => {
                return [...prevState.sort((a, b) => a.eta < b.eta ? -1 : 1)];
            });
        } else {
            setSortedProducts(prevState => {
                return [...prevState.sort((a, b) => a.eta > b.eta ? -1 : 1)];
            });
        }
    }

    const sortPriceOption = (e) => {
        const { value } = e.target;
        if (value === "asc") {
            setSortedProducts(prevState => {
                return [...prevState.sort((a, b) => a.price.amount < b.price.amount ? -1 : 1)];
            });
        } else {
            setSortedProducts(prevState => {
                return [...prevState.sort((a, b) => a.price.amount > b.price.amount ? -1 : 1)];
            });
        }
    }

    const sortPassengersOption = (e) => {
        const { value } = e.target;
        if (value === "asc") {
            setSortedProducts(prevState => {
                return [...prevState.sort((a, b) => a.product.maxPax < b.product.maxPax ? -1 : 1)];
            });
        } else {
            setSortedProducts(prevState => {
                return [...prevState.sort((a, b) => a.product.maxPax > b.product.maxPax ? -1 : 1)];
            });
        }
    }

    const filterBrandOption = (e) => {
        const { value } = e.target;
        if (value === "all") {
            // filter products by all brands
            setSortedProducts(products);
        } else {
            setSortedProducts([...products.filter(product => product.supplier.supplierKey === value)]);
        }
    }

    const sortProductsBasedOnETA = (products) => {  // sort products based on ETA
        return products.sort((a, b) => {
            return a.eta < b.eta ? -1 : 1;
        });
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        // sort the product based on ETA
        products && setSortedProducts(sortProductsBasedOnETA(products));
    }, [products]);

    useEffect(() => {
        // sort the product based on ETA
        products && setProductBrands((prevState) => {
            return [...new Set(products.map(product => product.supplier.supplierKey))];
        });
    }, [products]);

    return (
        <>
            <section id="car-listing" className="mt-4">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div className="left">
                            <div className="form-group">
                                <label className="mb-2">Sort by ETA</label>
                                <select className="form-select" onChange={(e) => sortETAOption(e)}>
                                    <option value="asc">Asc</option>
                                    <option value="desc">Desc</option>
                                </select>
                            </div>
                            <div className="form-group mx-4">
                                <label className="mb-2">Sort by Price</label>
                                <select className="form-select" onChange={(e) => sortPriceOption(e)}>
                                    <option value="asc">Asc</option>
                                    <option value="desc">Desc</option>
                                </select>
                            </div>
                            <div className="form-group mx-4">
                                <label className="mb-2">Sort by Max Pax</label>
                                <select className="form-select" onChange={(e) => sortPassengersOption(e)}>
                                    <option value="asc">Asc</option>
                                    <option value="desc">Desc</option>
                                </select>
                            </div>
                        </div>
                        <div className="right">
                            <div className="form-group">
                                <label className="mb-2">Brands</label>
                                <select className="form-select" onChange={(e) => filterBrandOption(e)}>
                                    <option value="all">All</option>
                                    {productBrands && productBrands.map((brand, index) => (
                                        <option key={index} value={brand}>{capitalizeFirstLetter(brand)}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            loading ? 
                                <Loader />
                            : 
                            sortedProducts.length > 0 ? sortedProducts.map((product, index) => {
                                return (
                                    <div className="col-md-4" key={product.availabilityId}>
                                        <ProductItem product={product} />
                                    </div>
                                )
                            }) : 
                            (
                                <div className="col-12 text-center">
                                    <h3>No product available...</h3>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductListing

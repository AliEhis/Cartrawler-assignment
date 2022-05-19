export const currency = value => {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export const plurarize = duration => {
    return duration > 1 ? `s` : ``;
}

export const getSupplierLogo = (supplier) => {
    return `/assets/images/supplier-${supplier.toLowerCase()}.svg`;
}

export const getVehicleImage = (productType, vehicleType) => {
    return `/assets/images/vehicle-${productType.toLowerCase()}-${vehicleType.toLowerCase()}.svg`;
}

export const capitalize = string => {
    return string.toUpperCase();
}

export const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
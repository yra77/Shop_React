

function FiltersSearch(products, filtersData) {

    let arr = new Array();

    try {
        if (filtersData.genders.length > 0) {
            arr = products.products.filter(item => filtersData.genders.includes(item.gender));
        }
        if (filtersData.brands.length > 0) {
            arr = arr.filter(item => filtersData.brands.includes(item.brand));
        }
        if (filtersData.sizes.length > 0) {
            arr = arr.filter(item => filtersData.sizes.some(filitem => item.size.includes(filitem)));
        }

        if (filtersData.price.min !== filtersData.price.max) {
            arr = arr.filter(item =>
                parseInt(filtersData.price.min) <= parseInt(item.price)
                && parseInt(filtersData.price.max) >= parseInt(item.price));
        }
    }
    catch { }
    
    return arr;
}

export default FiltersSearch;
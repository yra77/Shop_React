

import { makeAutoObservable } from "mobx";


export default class ProductsStor {

    constructor() {
        
        this._genders = [
            { id: 0, name: 'm' },
            { id: 1, name: 'w' },
            { id: 2, name: 'u' }
        ];

        this._brands = [
            { id: 0, name: 'nike', img:'../../images/ic_nike.png' },
            { id: 1, name: 'adidas', img:'../../images/ic_adidas.png' },
            { id: 2, name: 'nb', img:'../../images/ic_nb.png' },
            { id: 3, name: 'puma', img:'../../images/ic_puma.png' }
        ];

        this._products = [
            {id:0, brand:'nike', gender:'m',name:'air', isBestSeller:true, isNew:false, size:['41', '43', '44'], color:['red', 'white'], price:205, count:5, description:'Some quick example text to build on the card title and make up the bulk of the cards content.', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
            {id:1, brand:'adidas', gender:'w', name:'adidas', isBestSeller:true, isNew:true, size:['37', '38', '39'], color:['black', 'white', 'gray'], price:185, count:2, description:'Some quick example text to build on the card title and make up the bulk of the cards content.', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
            {id:2, brand:'nb', gender:'u',name:'nb707', isBestSeller:false, isNew:false, size:['39', '41', '43'], color:['white'], price:105, count:7, description:'Some quick example text to build on the card title ', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
            {id:3, brand:'nike', gender:'w',name:'nike1', isBestSeller:true, isNew:false, size:['41', '42', '44'], color:['green', 'white'], price:215, count:10, description:'Some quick example text to build on the card title and make up the bulk of the card', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
            {id:4, brand:'adidas', gender:'m',name:'bidas', isBestSeller:false, isNew:true, size:['41', '42'], color:['green', 'white'], price:235, count:5, description:'Some quick example text to build', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
            {id:5, brand:'puma', gender:'u',name:'928pums', isBestSeller:true, isNew:false, size:['37', '38', '39', '41', '43'], count:3, price:165, color:['red', 'gray','green', 'white'], description:'Some quick example text to build on the card title and make up the bulk of the card', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']},
            {id:6, brand:'puma', gender:'m',name:'puma787', isBestSeller:true, isNew:true, size:['40', '41', '42'], color:['black', 'white'], count:8, price:100, description:'Some quick example text to build on the card title and make up the bulk of the card', img:['https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png', 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png']}
        ];

        this._productsFilter = this._products;

        this._sizes = [
            { id: 0, size: '37' },
            { id: 1, size: '38' },
            { id: 2, size: '39' },
            { id: 3, size: '40' },
            { id: 4, size: '41' },
            { id: 5, size: '42' },
            { id: 6, size: '43' },
            { id: 7, size: '44' }
        ];

        makeAutoObservable(this);
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setProducts(products) {
        this._products = products;
    }

    setProductsFilter(productsFilter) {
        this._productsFilter = productsFilter;
    }

    setSizes(sizes) {
        this._sizes = sizes;
    }

    setGenders(genders) {
        this._genders = genders;
    }

    get genders() {
        return this._genders;
    }

    get brands() {
        return this._brands;
    }

    get products() {
        return this._products;
    }

    get productsFilter() {
        return this._productsFilter;
    }

    get sizes() {
        return this._sizes;
    }
}
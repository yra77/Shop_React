

import { makeAutoObservable } from "mobx";


export default class CartStor {

    constructor() {
        this._carts = [{ id: 0, productId: 1, count: 1, color: 'black', size: 39 },
                       { id: 1, productId: 2, count: 1, color: 'white', size: 41 },
                       { id: 2, productId: 6, count: 1, color: 'black', size: 42 }];
        
            makeAutoObservable(this);
    }

    setCarts(carts) {
        this._carts = carts;
    }

    get carts(){
        return this._carts;
    }

}


import { makeAutoObservable } from "mobx";


export default class UserStor{
    
    constructor() {
        this._isAuth = true;
        this._user = {};
        this._cart = [];
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setCart(item) {
        this._cart.push(item);
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get cart() {
        return this._cart;
    }
}
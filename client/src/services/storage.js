import { keys } from "./constants";

class Storage {
    constructor() {
        this.localStorage = window.localStorage;
        this.sessionStorage = window.sessionStorage;
    }

    getItem(item) {
        return this.localStorage.getItem(item);
    }
    
    setItem(key, value) {
        this.localStorage.setItem(key, value);
    }

    getToken() {
        return this.getItem(keys.Token);
    }

    getRefresh() {
        return this.getItem(keys.Refresh);
    }

    removeItem(key) {
        this.localStorage.removeItem(key);
    }

    setToken(token) {
        this.setItem(keys.Token, token);
    }

    setRefresh(refresh) {
        this.setItem(keys.Refresh, refresh);
    }

    removeToken() {
        this.removeItem(keys.Token);
    }
    
    removeRefresh() {
        this.removeItem(keys.Refresh);
    }

    setAuth(data) {
        this.setToken(data.access_token);
        this.setRefresh(data.refresh_token);
    }

    removeAuth() {
        this.removeToken();
        this.removeRefresh();
    }


    getAuth() {
        return {
            token: this.getToken(),
            refresh: this.getRefresh(),
        };
    }
}

export default new Storage();

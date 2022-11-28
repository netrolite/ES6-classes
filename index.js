class Product {
    constructor(name, price, discountable) {
        this._name = name;
        this._price = price;
        this._discountable = discountable;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        if (typeof name !== "string") {
            return this._name;
        }
        this._name = name;
    }

    get discountable() {
        return this._discountable;
    }
    set discountable(discountable) {
        if (typeof discountable !== "boolean") {
            return this._discountable;
        }
        this._discountable = discountable;
    }

    get price() {
        return this._price;
    }
    set price(price) {
        if (typeof price !== "number") {
            console.error("Price must be a number");
            return this._price;
        }
        this._price = price;
    }
}

const prod1 = new Product("Coffee Maker", 199.99, false);
prod1.price = "new cool price";
console.log(prod1);

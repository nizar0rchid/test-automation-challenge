export class Coin {
    constructor({ uuid, name, symbol, price }) {
        this.uuid = uuid;
        this.name = name;
        this.symbol = symbol;
        this.price = price;
    }

    isValid() {
        return !!(this.uuid && this.name && this.symbol);
    }
}

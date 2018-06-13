export class CoffeeContribution {
    static lastId: number = 0;

    id: number = CoffeeContribution.lastId++;
    name: string = null;
    email: string = null;
    quantity: number;
    createdOn: Date;
    constructor(_name = null,
        _email = null,
        _quantity = 1,
        _createdOn: Date = new Date()) {
        this.name = _name;
        this.quantity = _quantity;
        this.email = _email;
        this.createdOn = _createdOn;
    }
}
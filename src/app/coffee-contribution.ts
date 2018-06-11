export class CoffeeContribution {
    static lastId: number = 0;
   

    id: number = CoffeeContribution.lastId++;
    email: string = null;
    quantity: number;
    createdOn: Date;
    constructor(_email = null,
                _quantity = 1,
                _createdOn: Date = new Date() ) {
        this.quantity=_quantity;
        this.email=_email;
        this.createdOn = _createdOn;
    }   
}
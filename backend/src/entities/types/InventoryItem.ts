import sanitizer from '../sanitizer';


export default class InventoryItem {
  private id: string;
  private name: string;
  private borrower: string;
  private checkoutDate: Date;
  private dueDate: Date;

  constructor(input: any){
    const { id, name, borrower, checkoutDate, dueDate } = input;
    try {

      this.id = sanitizer(id);
      this.name = sanitizer(name);

    } catch(err) {

      throw 'Item could not be created due to failed sanitizer';

    }

    this.borrower = borrower;
    this.checkoutDate = checkoutDate;
    this.dueDate = dueDate
  }

  getId(){
    return this.id;
  }

  getName(){
    return this.name;
  }

  getBorrower(){
    return this.borrower;
  }

  getCheckoutDate(){
    return this.checkoutDate;
  }

  getDueDate(){
    return this.dueDate;
  }

  updateBorrower(borrowerName?: string): string{
    if(borrowerName) this.borrower = borrowerName;
    else this.borrower = null;

    return this.borrower;
  }

  checkout() {
    this.checkoutDate = new Date();
    this.dueDate = new Date();
    this.dueDate.setDate(this.checkoutDate.getDate() + 7); //due 7 days after checkout date

    return this.details();
  }

  checkin() {
    this.checkoutDate = null;
    this.dueDate = null;

    return this.details();
  }

  details() {
    const { id, name, borrower, dueDate, checkoutDate } = this;
    return({
      id, name, borrower, dueDate, checkoutDate
    })
  }
}
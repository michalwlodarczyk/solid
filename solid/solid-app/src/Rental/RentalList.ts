import {BookType} from "../Book/Book";
import {RentalType} from "./Rental";

export interface RentalListType {
  add(rental: RentalType): void;
  remove(book: BookType): void;
  getAllRentals(): Array<RentalType>;
}

export class RentalList implements RentalListType {
  private rentals: Array<RentalType> = [];

  add(rental: RentalType): void {
    this.rentals.push(rental);
  }

  remove(book: BookType): void {
    this.rentals = this.rentals.filter(rental => rental.getBook() !== book);
  }

  getAllRentals(): Array<RentalType> {
    return this.rentals;
  }
}

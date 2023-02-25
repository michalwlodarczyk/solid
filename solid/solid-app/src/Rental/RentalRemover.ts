import {BookType} from "../Book/Book";
import {RentalListType} from "./RentalList";

export interface RentalRemoverType {
  remove(book: BookType): void;
}

export class RentalRemover implements RentalRemoverType {
  constructor(private readonly rentalList: RentalListType) {
  }

  remove(book: BookType): void {
    this.rentalList.remove(book);
  }
}

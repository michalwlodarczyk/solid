import {ClientType} from "../Client/Client";
import {BookType} from "../Book/Book";
import {Rental} from "./Rental";
import {RentalListType} from "./RentalList";

export interface RentalCreatorType {
  create(client: ClientType, book: BookType): void;
}

export class RentalCreator implements RentalCreatorType {
  constructor(private readonly rentalList: RentalListType) {
  }

  create(client: ClientType, book: BookType): void {
    const rental = new Rental(client, book);
    this.rentalList.add(rental);
  }
}

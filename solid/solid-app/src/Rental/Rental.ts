import {ClientType} from "../Client/Client";
import {BookType} from "../Book/Book";

export interface RentalType {
  getClient(): ClientType;
  getBook(): BookType;
}

export class Rental implements RentalType {
  constructor(private readonly client: ClientType, private readonly book: BookType) {
  }

  getBook(): BookType {
    return this.book;
  }

  getClient(): ClientType {
    return this.client;
  }
}

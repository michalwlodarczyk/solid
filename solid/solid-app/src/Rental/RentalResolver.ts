import {ClientType} from "../Client/Client";
import {BookListType} from "../Book/BookList";
import {BookType} from "../Book/Book";
import {RentalListType} from "./RentalList";
import {BookListCreator} from "../Book/BookListCreator";

export interface RentalResolverType {
  getBookListByClient(client: ClientType): BookListType;
  getClientByBook(book: BookType): ClientType | null;
}

export class RentalResolver implements RentalResolverType {
  constructor(private readonly rentalList: RentalListType) {
  }

  getBookListByClient(client: ClientType): BookListType {
    const rentals = this.rentalList.getAllRentals().filter(rental => rental.getClient() === client);
    const books = rentals.map(rental => rental.getBook());

    return BookListCreator.fromArray(books);
  }

  getClientByBook(book: BookType): ClientType | null {
    const rental = this.rentalList.getAllRentals().find((rental) => rental.getBook() === book);
    if (!rental) {
      return null;
    }

    return rental.getClient();
  }
}

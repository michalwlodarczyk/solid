import {ClientType} from "../Client/Client";
import {BookType} from "../Book/Book";
import {BookStatusType} from "../Book/BookStatus";

export interface RentalType {
  getAllClients(): Map<ClientType, Array<BookType>>;
  getClientBooks(client: ClientType): Array<BookType>;
  borrow(client: ClientType, book: BookType): void;
  return(client: ClientType, book: BookType): void;
  getBookStatus(book: BookType): BookStatusType;
  getClientOfBook(book: BookType): ClientType | null;
}

export class Rental implements RentalType {
  private readonly items: Map<ClientType, Array<BookType>> = new Map();

  constructor(private readonly bookStatus: BookStatusType) {
  }

  getAllClients(): Map<ClientType, Array<BookType>> {
    return this.items;
  }

  getClientBooks(client: ClientType): Array<BookType> {
    return this.items.get(client) || [];
  }

  borrow(client: ClientType, book: BookType) {
    const books = this.getClientBooks(client);
    this.items.set(client, [...books, book]);
  }

  return(client: ClientType, book: BookType) {
    const books = this.getClientBooks(client).filter(b => b !== book);
    this.items.set(client, books);
  }

  getBookStatus(book: BookType): BookStatusType {
    let found = false;
    this.items.forEach((books: Array<BookType>) => {
      books.forEach((borrowedBook: BookType) => {
        if (borrowedBook === book) {
          found = true;
        }
      });
    })

    this.bookStatus.setStatus(found ? 'borrowed' : 'returned');
    return this.bookStatus;
  }

  getClientOfBook(book: BookType): ClientType | null {
    let clientOfBook = null;
    this.items.forEach((books: Array<BookType>, client: ClientType) => {
      const found = books.find(borrowedBook => borrowedBook === book);

      if (found) {
        clientOfBook = client;
      }
    });

    return clientOfBook;
  }
}

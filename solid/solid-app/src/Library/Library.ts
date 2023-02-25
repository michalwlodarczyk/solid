import {BookType} from "../Book/Book";
import {BookListType} from "../Book/BookList";
import {ClientListType} from "../Client/ClientList";
import {ClientType} from "../Client/Client";

export interface LibraryType {
  addBook(book: BookType): void;
  getAllBooks(): BookListType;
  addClient(client: ClientType): void;
  getAllClients(): ClientListType;
}

export class Library implements LibraryType {
  constructor(private readonly bookList: BookListType, private readonly clientList: ClientListType) {
  }

  addBook(book: BookType) {
    this.bookList.addBook(book);
  }

  getAllBooks(): BookListType {
    return this.bookList;
  }

  addClient(client: ClientType): void {
    this.clientList.addClient(client);
  }

  getAllClients(): ClientListType {
    return this.clientList;
  }
}

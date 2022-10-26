import {BookType} from "../Book/Book";
import {BookListType} from "../Book/BookList";
import {ClientListType} from "../Client/ClientList";
import {ClientType} from "../Client/Client";

export interface LibraryType {
  addBook(book: BookType): void;
  getAllBooks(): Array<BookType>;
  addClient(client: ClientType): void;
  getAllClients(): Array<ClientType>;
}

export class Library implements LibraryType {
  constructor(private readonly bookList: BookListType, private readonly clientList: ClientListType) {
  }

  addBook(book: BookType) {
    this.bookList.addBook(book);
  }

  getAllBooks(): Array<BookType> {
    return this.bookList.getAllBooks();
  }

  addClient(client: ClientType): void {
    this.clientList.addClient(client);
  }

  getAllClients(): Array<ClientType> {
    return this.clientList.getAllClients();
  }
}

jest.mock('../Book/BookList');
jest.mock('../Client/ClientList');
import {BookList, BookListType} from "../Book/BookList";
import {ClientList, ClientListType} from "../Client/ClientList";

import {Client} from "../Client/Client";
import {Library, LibraryType} from "./Library";
import {Book} from "../Book/Book";

let books: BookListType;
let clients: ClientListType;
let lib: LibraryType;

describe('Library', () => {
  beforeEach(() => {
    books = new BookList();
    clients = new ClientList();
    lib = new Library(books, clients);
  });

  it('should add book', () => {
    const newBook = new Book('lorem', 'ipsum');
    lib.addBook(newBook);

    jest.spyOn(books, 'addBook');
    expect(books.addBook).toHaveBeenCalledWith(newBook);
  });

  it('should add client', () => {
    const newClient = new Client('lorem ipsum');
    lib.addClient(newClient);

    jest.spyOn(clients, 'addClient');
    expect(clients.addClient).toHaveBeenCalledWith(newClient);
  });

  it('should return books', () => {
    jest.spyOn(books, 'getAllBooks');
    lib.getAllBooks();
    expect(books.getAllBooks).toHaveBeenCalled();
  });

  it('should return clients', () => {
    jest.spyOn(clients, 'getAllClients');
    lib.getAllClients();
    expect(clients.getAllClients).toHaveBeenCalled();
  });
});

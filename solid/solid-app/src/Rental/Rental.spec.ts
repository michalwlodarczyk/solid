import {Rental} from "./Rental";
import {Client} from "../Client/Client";
import {Book} from "../Book/Book";
import {BookStatus} from "../Book/BookStatus";

describe('rental', () => {
  it('should return empty map', () => {
    const bookStatus = new BookStatus();
    const rental = new Rental(bookStatus);

    expect(rental.getAllClients()).toEqual(new Map());
  });

  it('should add book to client', () => {
    const bookStatus = new BookStatus();
    const rental = new Rental(bookStatus);
    const client = new Client('ipsum');
    const book = new Book('lorem', 'lorem');
    rental.borrow(client, book);

    expect(rental.getClientBooks(client)).toEqual([book]);
  });

  it('should add two books to client', () => {
    const bookStatus = new BookStatus();
    const rental = new Rental(bookStatus);
    const client = new Client('ipsum');
    const book = new Book('lorem', 'lorem');
    const book2 = new Book('lorem2', 'lorem2');
    rental.borrow(client, book);
    rental.borrow(client, book2);

    expect(rental.getClientBooks(client)).toEqual([book, book2]);
  });

  it('should remove book from client', () => {
    const bookStatus = new BookStatus();
    const rental = new Rental(bookStatus);
    const client = new Client('ipsum');
    const book = new Book('lorem', 'lorem');
    const book2 = new Book('lorem2', 'lorem2');
    rental.borrow(client, book);
    rental.borrow(client, book2);
    rental.return(client, book);

    expect(rental.getClientBooks(client)).toEqual([book2]);
  });

  it('should return borrowed book status', () => {
    const bookStatus = new BookStatus();
    const rental = new Rental(bookStatus);
    const client = new Client('ipsum');
    const book = new Book('lorem', 'lorem');
    rental.borrow(client, book);

    expect(rental.getBookStatus(book)).toEqual({status: 'borrowed'});
  });

  it('should return returned book status', () => {
    const bookStatus = new BookStatus();
    const rental = new Rental(bookStatus);
    const client = new Client('ipsum');
    const book = new Book('lorem', 'lorem');
    rental.borrow(client, book);
    rental.return(client, book);

    expect(rental.getBookStatus(book)).toEqual({status: 'returned'});
  });

  it('should return client of book', () => {
    const bookStatus = new BookStatus();
    const rental = new Rental(bookStatus);
    const client = new Client('ipsum');
    const book = new Book('lorem', 'lorem');

    rental.borrow(client, book);

    expect(rental.getClientOfBook(book)).toBe(client);
  });
});

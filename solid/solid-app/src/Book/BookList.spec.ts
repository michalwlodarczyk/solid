import {BookList, BookListType} from "./BookList";
import {Book} from "./Book";

describe('book list', () => {
  it('should return empty array of books', () => {
    const bookList: BookListType = new BookList();

    expect(bookList.getAllBooks()).toEqual([]);
  });

  it('should add book to the list', () => {
    const bookList = new BookList();
    const book = new Book('aaa', 'bbb');
    bookList.addBook(book);

    expect(bookList.getAllBooks()).toEqual([book]);
  });

  it('should add two books to the list', () => {
    const bookList = new BookList();
    const book1 = new Book('aaa', 'bbb');
    bookList.addBook(book1);

    const book2 = new Book('ccc', 'ddd');
    bookList.addBook(book2);

    expect(bookList.getAllBooks()).toEqual([book1, book2]);
  });
});

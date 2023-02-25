import {BookList, BookListType} from "./BookList";
import {Book, BookType} from "./Book";

export interface BookListCreatorType {
  // TODO: how to add static method to interface?!
  // static fromArray(books: Array<BookType>): BookListType;
}

export class BookListCreator implements BookListCreatorType {
  static fromArray(books: Array<BookType>): BookListType {
    const bookList = new BookList();
    books.forEach(book => {
      bookList.addBook(book);
    })

    return bookList;
  }
}

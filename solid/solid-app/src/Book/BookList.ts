import {BookType} from "./Book";

export interface BookListType {
  addBook(book: BookType): void;
  getAllBooks(): Array<BookType>;
}

export class BookList implements BookListType {
  private books: Array<BookType> = [];

  getAllBooks(): Array<BookType> {
    return this.books;
  }

  addBook(book: BookType): void {
    this.books.push(book);
  }
}

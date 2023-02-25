import {Book} from "./Book";
import {BookListCreator} from "./BookListCreator";

describe('book list creator', () => {
  it('should create book list from array', () => {
    const book1 = new Book('lorem', 'ipsum');
    const book2 = new Book('lorem', 'ipsum');

    const bookList = BookListCreator.fromArray([book1, book2]);

    expect(bookList.getAllBooks()).toEqual([book1, book2]);
  });
});

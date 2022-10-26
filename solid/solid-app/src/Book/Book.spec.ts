import {Book} from "./Book";

describe('book', () => {
  it('should set title', () => {
    const book = new Book('lorem', 'ipsum');
    expect(book.getTitle()).toBe('lorem');
  });

  it('should set author', () => {
    const book = new Book('lorem', 'ipsum');
    expect(book.getAuthor()).toBe('ipsum');
  });
});

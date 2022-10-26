import {BookStatus} from "./BookStatus";

describe('book status', () => {
  it('should set borrowed status', () => {
    const bookStatus = new BookStatus();
    bookStatus.setStatus('borrowed');

    expect(bookStatus.getStatus()).toBe('borrowed');
  });

  it('should set returned status', () => {
    const bookStatus = new BookStatus();
    bookStatus.setStatus('returned');

    expect(bookStatus.getStatus()).toBe('returned');
  });
});

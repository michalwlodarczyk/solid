import {Rental} from "./Rental";
import {Book} from "../Book/Book";
import {Client} from "../Client/Client";

describe('rental', () => {
  it('should return book', () => {
    const client = new Client('lorem ipsum');
    const book = new Book('lorem', 'ipsum');
    const rental = new Rental(client, book);

    expect(rental.getBook()).toBe(book);
  });

  it('should return client', () => {
    const client = new Client('lorem ipsum');
    const book = new Book('lorem', 'ipsum');
    const rental = new Rental(client, book);

    expect(rental.getClient()).toBe(client);
  });
});

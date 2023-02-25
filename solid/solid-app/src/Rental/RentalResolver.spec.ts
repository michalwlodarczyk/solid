// jest.mock('./RentalList');
import {RentalList} from "./RentalList";
import {Client} from "../Client/Client";
import {Book} from "../Book/Book";
import {Rental} from "./Rental";
import {RentalResolver} from "./RentalResolver";

describe('rental resolver', () => {
  it('should return book list', () => {
    const rentalList = new RentalList();
    const client = new Client('lorem ipsum');
    const book = new Book('lorem', 'ipsum');
    const book2 = new Book('lorem', 'ipsum');

    rentalList.add(new Rental(client, book));
    rentalList.add(new Rental(client, book2));

    const rentalResolver = new RentalResolver(rentalList);

    expect(rentalResolver.getBookListByClient(client).getAllBooks()).toEqual([book, book2]);
  });

  it('should return client', () => {
    const rentalList = new RentalList();
    const client = new Client('lorem ipsum');
    const book = new Book('lorem', 'ipsum');
    const book2 = new Book('lorem', 'ipsum');

    rentalList.add(new Rental(client, book));
    rentalList.add(new Rental(client, book2));

    const rentalResolver = new RentalResolver(rentalList);

    expect(rentalResolver.getClientByBook(book)).toBe(client);
  })
});

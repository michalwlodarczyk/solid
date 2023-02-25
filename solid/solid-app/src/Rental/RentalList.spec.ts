import {RentalList} from "./RentalList";
import {Client} from "../Client/Client";
import {Book} from "../Book/Book";
import {Rental} from "./Rental";

describe('rental list', () => {
  it('should return empty list', () => {
    const rentalList = new RentalList();

    expect(rentalList.getAllRentals()).toEqual([]);
  });

  it('should add item to the list', () => {
    const rentalList = new RentalList();
    const client = new Client('lorem ipsum');
    const book = new Book('lorem', 'ipsum');
    const rental = new Rental(client, book);
    rentalList.add(rental);

    expect(rentalList.getAllRentals()).toEqual([{client, book}]);
  });

  it('should add two item to the list', () => {
    const rentalList = new RentalList();
    const client = new Client('lorem ipsum');
    const client2 = new Client('lorem ipsum');
    const book = new Book('lorem', 'ipsum');
    const book2 = new Book('lorem', 'ipsum');
    const rental = new Rental(client, book);
    const rental2 = new Rental(client2, book2);

    rentalList.add(rental);
    rentalList.add(rental2);

    expect(rentalList.getAllRentals()).toEqual([rental, rental2]);
  });

  it('should remove item from the list', () => {
    const rentalList = new RentalList();
    const client = new Client('lorem ipsum');
    const client2 = new Client('lorem ipsum');
    const book = new Book('lorem', 'ipsum');
    const book2 = new Book('lorem', 'ipsum');
    const rental = new Rental(client, book);
    const rental2 = new Rental(client2, book2);

    rentalList.add(rental);
    rentalList.add(rental2);

    rentalList.remove(book);

    expect(rentalList.getAllRentals()).toEqual([{client: client2, book: book2}]);
  });
});

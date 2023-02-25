import {Rental} from "./Rental";

jest.mock('./RentalList');
import {RentalList} from "./RentalList";

import {Client} from "../Client/Client";
import {Book} from "../Book/Book";
import {RentalRemover} from "./RentalRemover";

describe('rental remover', () => {
  it('should remove book from the rental list', () => {
    const rentalList = new RentalList();
    jest.spyOn(rentalList, 'remove');

    const client = new Client('lorem ipsum');
    const book = new Book('lorem', 'ipsum');
    const rental = new Rental(client, book)
    rentalList.add(rental);

    const rentalRemover = new RentalRemover(rentalList);
    rentalRemover.remove(book);

    expect(rentalList.remove).toHaveBeenCalledWith(book);
  });
});

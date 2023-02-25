jest.mock('./RentalList');
import {RentalList} from "./RentalList";

import {Rental} from "./Rental";
import {RentalCreator} from "./RentalCreator";
import {Client} from "../Client/Client";
import {Book} from "../Book/Book";

describe('rental creator', () => {
  it('should create rental and add it to the rental list', () => {
    const rentalList = new RentalList();
    jest.spyOn(rentalList, 'add');

    const client = new Client('lorem ipsum');
    const book = new Book('lorem', 'ipsum');
    const rental = new Rental(client, book)

    const rentalCreator = new RentalCreator(rentalList);
    rentalCreator.create(client, book);

    expect(rentalList.add).toHaveBeenCalledWith(rental);
  });
});

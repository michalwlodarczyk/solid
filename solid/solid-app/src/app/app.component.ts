import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Library, LibraryType} from "../Library/Library";
import {ClientList, ClientListType} from "../Client/ClientList";
import {BookList, BookListType} from "../Book/BookList";
import {Book, BookType} from "../Book/Book";
import {Client, ClientType} from "../Client/Client";
import {RentalList, RentalListType} from "../Rental/RentalList";
import {RentalCreator} from "../Rental/RentalCreator";
import {RentalRemover} from "../Rental/RentalRemover";
import {RentalResolver} from "../Rental/RentalResolver";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly library: LibraryType;
  private readonly rentalList: RentalListType;
  protected readonly bookList: BookListType;
  protected readonly clientList: ClientListType;

  // forms:
  protected newBookAuthor: string = '';
  protected newBookTitle: string = '';
  protected newClientName: string = '';
  protected newClientSurname: string = '';
  protected rentalClient: ClientType | null = null;
  protected rentalBook: BookType | null = null;

  constructor() {
    const clients = new ClientList();
    const books = new BookList();
    this.library = new Library(books, clients);
    this.rentalList = new RentalList();
    this.bookList = this.library.getAllBooks();
    this.clientList = this.library.getAllClients();

    // fixtures:
    const book1 = new Book('book 1', 'author A');
    this.library.addBook(book1);
    this.library.addBook(new Book('book 1', 'author A'));
    this.library.addBook(new Book('book 2', 'author A'));
    this.library.addBook(new Book('book 3', 'author B'));
    this.library.addBook(new Book('book 4', 'author B'));
    this.library.addBook(new Book('book 5', 'author C'));
    this.library.addBook(new Book('book 6', 'author D'));

    const clientA = new Client('client AAA');
    this.library.addClient(clientA);
    this.library.addClient(new Client('client BBB'));
    this.library.addClient(new Client('client CCC'));
    this.library.addClient(new Client('client DDD'));

    const rentalCreator = new RentalCreator(this.rentalList);
    rentalCreator.create(clientA, book1);
  }

  public isBookBorrowed(book: BookType): boolean {
    return !!this.getClientOfBook(book);
  }

  public getClientOfBook(book: BookType): ClientType | null {
    const rentalResolver = new RentalResolver(this.rentalList);
    return rentalResolver.getClientByBook(book);
  }

  public getClientBooks(client: ClientType): Array<BookType> {
    const rentalResolver = new RentalResolver(this.rentalList);
    return rentalResolver.getBookListByClient(client).getAllBooks();
  }

  public onReturnBookClicked(book: BookType): void {
    const rentalRemover = new RentalRemover(this.rentalList);
    rentalRemover.remove(book);
  }

  public onNewBookAdd(): void {
    const book = new Book(this.newBookTitle, this.newBookAuthor);
    this.library.addBook(book);

    this.newBookTitle = '';
    this.newBookAuthor = '';
  }

  public onNewClientAdd(): void {
    const client = new Client(`${this.newClientName} ${this.newClientSurname}`);
    this.library.addClient(client);

    this.newClientName = '';
    this.newClientSurname = '';
  }

  public onBorrowBookClick(): void {
    if (!this.rentalClient || !this.rentalBook) {
      return;
    }

    const rentalCreator = new RentalCreator(this.rentalList);
    rentalCreator.create(this.rentalClient, this.rentalBook);
  }
}

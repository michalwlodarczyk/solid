import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Library, LibraryType} from "../Library/Library";
import {ClientList} from "../Client/ClientList";
import {BookList} from "../Book/BookList";
import {Book, BookType} from "../Book/Book";
import {Client, ClientType} from "../Client/Client";
import {Rental, RentalType} from "../Rental/Rental";
import {BookStatus} from "../Book/BookStatus";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly library: LibraryType;
  private readonly rental: RentalType;
  protected readonly books: Array<BookType> = [];
  protected readonly clients: Array<ClientType> = [];

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
    this.rental = new Rental(new BookStatus());
    this.books = this.library.getAllBooks();
    this.clients = this.library.getAllClients();

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

    this.rental.borrow(clientA, book1);
  }

  public isBookBorrowed(book: BookType): boolean {
    return this.rental.getBookStatus(book).getStatus() === 'borrowed';
  }

  public getClientOfBook(book: BookType): ClientType | null {
    return this.rental.getClientOfBook(book);
  }

  public getClientBooks(client: ClientType): Array<BookType> {
    return this.rental.getClientBooks(client);
  }

  public onReturnBookClicked(book: BookType): void {
    const client = this.getClientOfBook(book);
    if (!client) {
      return
    }

    this.rental.return(client, book);
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

    this.rental.borrow(this.rentalClient, this.rentalBook);
  }
}

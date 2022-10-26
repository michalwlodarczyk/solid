export interface BookType {
  getTitle(): string;
  getAuthor(): string;
}

export class Book implements BookType {
  constructor(private readonly title: string, private readonly author: string) {
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }
}

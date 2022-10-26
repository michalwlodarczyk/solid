export interface ClientType {
  getName(): string;
}

export class Client implements ClientType {
  constructor(private readonly name: string) {
  }

  getName(): string {
    return this.name;
  }
}

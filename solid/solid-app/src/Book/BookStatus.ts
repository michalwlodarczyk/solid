type Status = 'borrowed' | 'returned';

export interface BookStatusType {
  setStatus(status: Status): void;
  getStatus(): Status;
}

export class BookStatus implements BookStatusType {
  private status: Status = 'borrowed';

  setStatus(status: Status) {
    this.status = status;
  }

  getStatus(): Status {
    return this.status;
  }
}

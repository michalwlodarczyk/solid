import {ClientType} from "./Client";

export interface ClientListType {
  getAllClients(): Array<ClientType>;
  addClient(client: ClientType): void;
}

export class ClientList implements ClientListType {
  clients: Array<ClientType> = [];

  getAllClients(): Array<ClientType> {
    return this.clients;
  }

  addClient(client: ClientType) {
    this.clients.push(client);
  }
}

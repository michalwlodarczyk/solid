import {ClientList} from "./ClientList";
import {Client} from "./Client";

describe('client list', () => {
  it('should return empty array of clients', () => {
    const clientList = new ClientList();

    expect(clientList.getAllClients()).toEqual([]);
  });

  it('should add client', () => {
    const clientList = new ClientList();
    const client = new Client('lorem ipsum');
    clientList.addClient(client);

    expect(clientList.getAllClients()).toEqual([client]);
  });

  it('should add two clients to the list', () => {
    const clientList = new ClientList();
    const client = new Client('lorem ipsum');
    clientList.addClient(client);
    const client2 = new Client('dolor sit');
    clientList.addClient(client2);

    expect(clientList.getAllClients()).toEqual([client, client2]);
  });
});

import {Client} from "./Client";

describe('client', () => {
  it('should set client name', () => {
    const client = new Client('lorem ipsum');
    expect(client.getName()).toBe('lorem ipsum');
  });
});

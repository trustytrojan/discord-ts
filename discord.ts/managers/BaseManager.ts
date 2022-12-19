import Client from '../Client';

export default abstract class BaseManager {
  protected readonly client: Client;

  constructor(client) {
    Object.defineProperty(this, 'client', { value: client });
  }
}
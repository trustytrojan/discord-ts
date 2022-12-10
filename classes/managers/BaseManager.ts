import BetterMap from '../../BetterMap';
import Client from '../Client';

export default class BaseManager {
  protected readonly client: Client;
  readonly cache: BetterMap<string, any>;

  constructor(client) {
    Object.defineProperty(this, 'client', { value: client });
    this.cache = new BetterMap<string, any>();
  }
}
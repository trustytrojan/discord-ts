import BetterMap from '../../BetterMap';
import Base from '../Base';
import Client from '../Client';

export default class BaseManager {
  protected readonly client: Client;
  readonly cache: BetterMap<string, Base>;

  constructor(client) {
    Object.defineProperty(this, 'client', { value: client });
    this.cache = new BetterMap<string, any>();
  }
}
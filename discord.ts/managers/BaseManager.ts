import BetterMap from '../util/BetterMap';
import Base from '../structures/Base';
import Client from '../Client';

export default class BaseManager {
  protected readonly client: Client;
  readonly cache: BetterMap<string, Base>;

  constructor(client) {
    Object.defineProperty(this, 'client', { value: client });
    this.cache = new BetterMap<string, any>();
  }
}
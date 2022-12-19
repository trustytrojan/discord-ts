import Client from '../Client';
import Base from '../structures/Base';
import BetterMap from '../util/BetterMap';

export default abstract class BaseManager {
  protected readonly client: Client;
  protected readonly cache: BetterMap<string, Base>;

  constructor(client) {
    Object.defineProperty(this, 'client', { value: client });
    this.cache = new BetterMap<string, Base>();
  }
}
import BetterMap from '../../BetterMap';
import Client from '../Client';
import User from '../User';

export default class UserManager {
  private client: Client;
  cache: BetterMap<string, User>;

  constructor(client: Client) {
    this.client = client;
    this.cache = new BetterMap<string, User>();
  }

  async fetch(id: string, force?: boolean) {
    if(!force) {
      const cached = this.cache.get(id);
      if(cached) return cached;
    }
    const data = await this.client.api.get(`/users/${id}`);
    const user = new User(this.client, data);
    this.cache.set(data.id, user);
    return user;
  }
}
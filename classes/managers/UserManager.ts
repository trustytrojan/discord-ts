import BetterMap from '../../BetterMap';
import Client from '../Client';
import ClientUser from '../ClientUser';
import User from '../User';
import BaseManager from './BaseManager';

export default class UserManager extends BaseManager {
  readonly cache: BetterMap<string, User>;

  constructor(client: Client) {
    super(client);
  }

  async fetch(id: string, force?: boolean): Promise<User> {
    if(!force) {
      const cached = this.cache.get(id);
      if(cached) return cached;
    }
    const data = await this.client.api.get(`/users/${id}`);
    const user = new User(this.client, data);
    this.cache.set(data.id, user);
    return user;
  }

  async fetchMe(): Promise<ClientUser> {
    const data = await this.client.api.get('/users/@me');
    const me = new ClientUser(this.client, data);
    this.cache.set(me.id, me);
    return me;
  }
}
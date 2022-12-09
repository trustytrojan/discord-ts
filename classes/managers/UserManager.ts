import { APIRelationshipUser } from '../../api-types';
import Client from '../Client';
import User from '../User';

type UserResolvable = User | APIRelationshipUser | string;

export default class UserManager {
  private client: Client;
  cache: Map<string, User>;

  constructor(client: Client) {
    this.client = client;
    this.cache = new Map<string, User>();
  }

  resolve(user: UserResolvable) {

  }

  async fetch(id: string): Promise<User> {
    {
      const cached = this.cache.get(id);
      if(cached) return cached;
    }
    const data = await this.client.api.get(`/users/${id}`);
    const user = new User(this.client, data);
    this.cache.set(data.id, user);
    return user;
  }
}
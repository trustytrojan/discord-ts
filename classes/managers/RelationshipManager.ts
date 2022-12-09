import Client from '../Client';
import Relationship from '../Relationship';

export default class RelationshipManager {
  private client: Client;
  cache: Map<string, Relationship>;

  constructor(client: Client) {
    this.client = client;
    this.cache = new Map<string, Relationship>();
  }

  async fetch() {
    const data = await this.client.api.get('/users/@me/relationships');
    for(const _data of data)
      this.cache.set(_data.id, new Relationship(this.client, _data));
  }

  async sendFriendRequest(user_id: string) {
    const [username, discriminator] = (await this.client.users.fetch(user_id)).tag.split('#');
    this.client.api.post('/users/@me/relationships', { username, discriminator: parseInt(discriminator) });
  }

  cancelFriendRequest(user_id: string) {

  }
}
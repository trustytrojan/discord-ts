import Client from '../Client';
import Relationship from '../Relationship';

export default class RelationshipManager {
  private client: Client;
  cache: Map<string, Relationship>;

  constructor(client: Client) {
    this.client = client;
    this.cache = new Map<string, Relationship>();
  }

  addFriend(tag: string) {
    this.client.api.post('/users/@me/relationships', { tag });
  }
}
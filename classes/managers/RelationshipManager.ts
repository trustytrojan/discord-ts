import BetterMap from '../../BetterMap';
import Client from '../Client';
import Relationship from '../Relationship';
import { RelationshipType } from '../../enums';
import BaseManager from './BaseManager';

export default class RelationshipManager extends BaseManager {
  readonly cache: BetterMap<string, Relationship>;

  constructor(client: Client) {
    super(client);
  }

  async fetch() {
    const data = await this.client.api.get('/users/@me/relationships');
    for(const _data of data)
      this.cache.set(_data.id, new Relationship(this.client, _data));
  }

  get friends() {
    return this.cache.filter((r) => r.type === RelationshipType.Friend);
  }

  get blocked() {
    return this.cache.filter((r) => r.type === RelationshipType.Blocked);
  }

  get incomingRequests() {
    return this.cache.filter((r) => r.type === RelationshipType.PendingIncoming);
  }

  get outgoingRequests() {
    return this.cache.filter((r) => r.type === RelationshipType.PendingOutgoing);
  }

  /**
   * Send a friend request to a Discord user.
   * @param username 
   * @param discriminator 
   */
  create(username: string, discriminator: string | number) {
    if(typeof discriminator === 'string')
      discriminator = parseInt(discriminator);
    return this.client.api.post('/users/@me/relationships', { username, discriminator });
  }

  /**
   * Delete a relationship with a user. This is the same as:
   * - removing a friend,
   * - canceling an outgoing friend request,
   * - ignoring an incoming friend request,
   * - or unblocking a user.
   * @param id The ID of the user.
   */
  delete(id: string) {
    return this.client.api.delete(`/users/@me/relationships/${id}`);
  }
}
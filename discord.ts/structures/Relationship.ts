import Base from './Base';
import Client from '../Client';
import User from './User';
import { RelationshipType } from '../Enums';

export default class Relationship extends Base {
  readonly type: RelationshipType;
  readonly nickname: string;
  readonly user: User;
  
  constructor(client: Client, data) {
    super(client, data);
    this.type = data.type;
    this.nickname = data.nickname;
    this.user = new User(this.client, data.user);
  }

  /**
   * Delete a relationship with the user associated with this relationship.
   * 
   * Depending on this relationship's type, this is the same as:
   * - removing this user as a friend,
   * - canceling an outgoing friend request to this user,
   * - ignoring an incoming friend request from this user,
   * - or unblocking this user.
   */
  async delete() {
    const resp = await this.client.api.delete(`/users/@me/relationships/${this.id}`);
  }
}
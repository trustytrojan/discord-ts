import Base from './Base';
import Client from './Client';
import { RelationshipType } from '../enums';
import { APIRelationshipUser } from '../api-types';

export default class Relationship extends Base {
  type: RelationshipType;
  nickname: string;
  user: APIRelationshipUser;
  
  constructor(client: Client, data) {
    super(client, data);
    this.copyDefinedPropertiesFrom(data);
  }

  async fetchUser() {
    return this.user = await this.client.users.fetch(this.id);
  }

  delete() {
    return this.client.api.delete(`/users/@me/relationships/${this.id}`);
  }
}
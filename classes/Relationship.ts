import Base from './Base';
import Client from './Client';
import RelationshipType from '../enums/RelationshipType';

export default class Relationship extends Base {
  type: RelationshipType;
  nickname: string;
  
  constructor(client: Client, data) {
    super(client, data);
    this.copyDefinedPropertiesFrom(data);
  }
}
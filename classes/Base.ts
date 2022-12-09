import Client from './Client';
import { timestampFromId } from '../utils';

export default class Base {
  client: Client;
  id: string;
  created: Date;

  constructor(client: Client, data) {
    this.client = client;
    this.id = data.id;
    this.created = new Date(timestampFromId(this.id));
  }

  protected copyDefinedPropertiesFrom(data) {
    for(const k in this) {
      if(data[k] === undefined) continue;
      this[k] = data[k];
    }
  }
}
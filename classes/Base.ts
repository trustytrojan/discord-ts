import Client from './Client';
import { timestampFromId } from '../utils';

export default class Base {
  protected readonly client: Client;
  readonly id: string;
  readonly created: Date;

  constructor(client: Client, data) {
    Object.defineProperty(this, 'client', { value: client });
    this.id = data.id;
    this.created = new Date(timestampFromId(this.id));
  }
}
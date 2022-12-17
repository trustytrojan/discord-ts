import Client from '../Client';

const discord_epoch = 1420070400000n;
export const timestampFromId = (id: string) => Number((BigInt(id) >> 22n) + discord_epoch);

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
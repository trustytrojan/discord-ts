import Base from './Base';
import Client from './Client';

export default class User extends Base {
  username: string;
  avatar: string;
  avatar_decoration;
  discriminator: string;
  bio?: string;
  public_flags: number;
  banner: string | null;
  banner_color: string;
  accent_color: number;
  connected_accounts: any[];
  premium_since?: Date;
  premium_type?: number;
  premium_guild_since?: Date;
  mutual_guilds: any[];

  constructor(client: Client, data) {
    super(client, data);
    this.username = data.username;
    this.fetchProfile();
  }

  get tag() { return `${this.username}#${this.discriminator}`; }

  async fetch() {
    const data = await this.client.api.get(`/users/${this.id}`);
    this.copyDefinedPropertiesFrom(data);
    return this;
  }

  private async fetchProfile() {
    const data = await this.client.api.get(`/users/${this.id}/profile`);
    this.copyDefinedPropertiesFrom(data);
  }

  addFriend() {
    return this.client.relationships.create(this.username, this.discriminator);
  }

  private copyDefinedPropertiesFrom(data) {
    for(const k in this) {
      if(data[k] === undefined) continue;
      this[k] = data[k];
    }
  }
}
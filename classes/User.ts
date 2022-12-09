import Base from './Base';

export default class User extends Base {
  username: string;
  avatar: string;
  avatar_decoration;
  discriminator: string;
  public_flags: number;
  banner: string | null;
  banner_color: string;
  accent_color: number;

  constructor(client, data) {
    super(client, data);
    this.copyDefinedPropertiesFrom(data);
  }

  get tag() { return `${this.username}#${this.discriminator}`; }

  async fetch() {
    
  }
}
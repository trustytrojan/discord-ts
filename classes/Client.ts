import RelationshipManager from './managers/RelationshipManager';
import DiscordAPIClient from '../DiscordAPIClient';
import UserManager from './managers/UserManager';
import ClientUser from './ClientUser';

export default class Client {
  api: DiscordAPIClient;
  user: ClientUser;
  users: UserManager;
  relationships: RelationshipManager;

  constructor() {
    this.api = new DiscordAPIClient(9);
    this.users = new UserManager(this);
    this.relationships = new RelationshipManager(this);
  }

  async login(token): Promise<ClientUser> {
    this.api.setToken(token);
    return (this.user = await this.users.fetchMe());
  }
}
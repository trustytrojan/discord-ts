import RelationshipManager from './managers/RelationshipManager';
import DiscordAPIClient from '../DiscordAPIClient';
import UserManager from './managers/UserManager';

export default class Client {
  api: DiscordAPIClient;
  users: UserManager;
  relationships: RelationshipManager;

  constructor(token: string) {
    this.api = new DiscordAPIClient(9, token);
    this.users = new UserManager(this);
    this.relationships = new RelationshipManager(this);
  }

  tokenLogin() {
    return this.api.get('/users/@me');
  }
}
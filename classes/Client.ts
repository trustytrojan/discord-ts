import RelationshipManager from './managers/RelationshipManager';
import DiscordAPIClient from '../DiscordAPIClient';

export default class Client {
  api: DiscordAPIClient;  
  relationships: RelationshipManager;

  constructor(token: string) {
    this.api = new DiscordAPIClient(9, token);
    this.relationships = new RelationshipManager(this);
  }

  login() {
    return this.api.get('/users/@me');
  }
}
import Client from '../Client';
import User from '../User';
import DataManager from './DataManager';

export default class UserManager extends DataManager {
  cache: Map<string, User>;

  constructor(client) {
    super(client);
  }
}
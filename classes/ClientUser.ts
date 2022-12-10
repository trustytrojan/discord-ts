import { copyDefinedProperties } from '../utils';
import Client from './Client';
import User from './User';

export default class ClientUser extends User {
  purchased_flags: number;
  mfa_enabled: boolean;
  nsfw_allowed: boolean;
  email?: string;
  verified: boolean;
  phone?: string;
  locale: string;

  constructor(client: Client, data) {
    super(client, data);
    for(const k in this) {
      if(data[k] === undefined) continue;
      this[k] = data[k];
    }
  }
}
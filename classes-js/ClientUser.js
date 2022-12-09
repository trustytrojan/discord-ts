const User = require('./User');

class ClientUser extends User {
  /** @type {string} */ bio;
  /** @type {number} */ purchased_flags;
  /** @type {boolean} */ mfa_enabled;
  /** @type {number} */ premium_type;
  /** @type {string} */ email;
  /** @type {boolean} */ verified;
  /** @type {string} */ phone;
  /** @type {string} */ locale;
  /** @type {boolean} */ nsfw_allowed;

  constructor(data, client) {
    super(data, client);
    for(const k in this)
      if(data[k] !== undefined)
        this[k] = data[k];
  }
};

module.exports = ClientUser;
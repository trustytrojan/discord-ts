const Guild = require('../Guild');

class GuildManager extends require('./DataManager') {
  constructor(client) {
    super(client);
    /** @type {Map<string,Guild>} */ this.cache;
  }

  /**
   * Fetches and caches the desired Guild object from Discord.
   * @param {string} id 
   * @return {Promise<Guild>}
   */
  async fetch(id) {
    {
      const cached = this.cache.get(id);
      if(cached) return cached;
    }
    const data = await super.fetch(`/guilds/${id}`);
    return this.cache.set(id, new Guild(data, this.client)).get(id);
  }

  /**
   * Fetches and caches all guilds that the client is a member of.
   */
  async fetchAll() {
    this.busy = true;
    const data = await super.fetch(`/users/@me/guilds`);
    for(const { id } of data) {
      await this.fetch(id);
    }
    this.busy = false;
  }
};

module.exports = GuildManager;
import Discord from './index';
import token from './token.json';

const client = new Discord.Client();

await client.login(token);
await client.relationships.fetch();

console.log(client.relationships.cache.random());
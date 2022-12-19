import token from './token.json';
import Client from './discord.ts/Client';

const client = new Client();

await client.login(token);
await client.relationships.fetch();

console.log(client.relationships.cache.random());

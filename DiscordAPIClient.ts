import FetchWrapper from './FetchWrapper';

export default class DiscordAPIClient extends FetchWrapper {  
  constructor(api_version: number, token: string) {
    super({
      base_url: `https://discord.com/api/v${api_version}`,
      headers: { authorization: token, 'Content-Type': 'application/json' }
    });
  }

  get(path: string, data?) {
    return super.get(path, JSON.stringify(data));
  }

  post(path: string, data?) {
    return super.post(path, JSON.stringify(data));
  }

  put(path: string, data?) {
    return super.post(path, JSON.stringify(data));
  }

  patch(path: string, data?) {
    return super.post(path, JSON.stringify(data));
  }

  delete(path: string, data?) {
    return super.post(path, JSON.stringify(data));
  }
}
import FetchWrapper from '../util/FetchWrapper';

export default class DiscordAPIClient extends FetchWrapper {  
  constructor(api_version: number) {
    super({
      base_url: `https://discord.com/api/v${api_version}`,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  setToken(token: string) {
    this.headers['authorization'] = token;
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
import { inspect } from 'util';
import colored from 'colored.js';

interface NodeFetchClientOptions {
  base_url: string;
  headers: HeadersInit;
}

export default class NodeFetchClient {
  private base_url: string;
  private headers: HeadersInit;

  constructor(options: NodeFetchClientOptions) {
    this.base_url = options.base_url;
    this.headers = options.headers;
  }

  private async makeRequest(path: string, method: string, body?: BodyInit) {
    const url = this.base_url+path;
    const resp = await fetch(url, { headers: this.headers, method, body });
    const data = await resp.json();
    if(!resp.ok) {
      console.error(`\n${colored.red('api error!')}\nstatus: ${resp.status} ${resp.statusText}\nrequest method: ${method}\nrequest url: ${url}\nrequest body: ${colored.blue(body)}\n`);
      console.error(`error object: ${inspect(data, false, Infinity)}`);
      return null;
    }
    return data;
  }

  get(path: string, body?: BodyInit) {
    return this.makeRequest(path, 'GET', body);
  }

  post(path: string, body?: BodyInit) {
    return this.makeRequest(path, 'POST', body);
  }

  patch(path: string, body?: BodyInit) {
    return this.makeRequest(path, 'PATCH', body);
  }

  delete(path: string, body?: BodyInit) {
    return this.makeRequest(path, 'DELETE', body);
  }
}
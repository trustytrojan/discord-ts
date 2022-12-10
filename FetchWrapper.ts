import { inspect } from 'util';

interface FetchWrapperOptions {
  readonly base_url: string;
  readonly headers: HeadersInit;
}

export default class FetchWrapper {
  public readonly base_url: string;
  public headers: HeadersInit;

  constructor(options: FetchWrapperOptions) {
    this.base_url = options.base_url;
    this.headers = options.headers;
  }

  private async makeRequest(path: string, method: string, body?: BodyInit) {
    const url = this.base_url+path;
    const resp = await fetch(url, { headers: this.headers, method, body });
    const data = await resp.json();
    if(!resp.ok) {
      console.error(`\napi error!\nstatus: ${resp.status} ${resp.statusText}\nrequest method: ${method}\nrequest url: ${url}\nrequest body: ${body}\n`);
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
  
  put(path: string, body?: BodyInit) {
    return this.makeRequest(path, 'PUT', body);
  }

  patch(path: string, body?: BodyInit) {
    return this.makeRequest(path, 'PATCH', body);
  }

  delete(path: string, body?: BodyInit) {
    return this.makeRequest(path, 'DELETE', body);
  }
}
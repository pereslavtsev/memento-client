import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import { MementosResponse } from '../classes';
import { MementoUri } from './uri';

export type MementoClientOptions =
  | Pick<AxiosRequestConfig, 'baseURL' | 'timeout'>
  | string;

export class MementoClient {
  protected readonly httpClient: AxiosInstance;

  protected static TIMEOUT = 60 * 1000;

  constructor(o: MementoClientOptions) {
    this.httpClient = axios.create({
      timeout: MementoClient.TIMEOUT,
    });
    this.initHttpClient(o);
  }

  protected initHttpClient(o: MementoClientOptions) {
    switch (typeof o) {
      case 'string': {
        this.httpClient.defaults.baseURL = o;
        break;
      }
      case 'object': {
        const { baseURL, timeout } = o;
        this.httpClient.defaults.baseURL = baseURL;
        this.httpClient.defaults.timeout = timeout;
        break;
      }
    }
    this.httpClient.interceptors.response.use(this.onResponse.bind(this));
  }

  protected onResponse(response: AxiosResponse) {
    response.data = plainToClass(MementosResponse, response.data);
    return response;
  }

  uri(uri: string) {
    return new MementoUri(uri, this);
  }

  request(url: string) {
    return this.httpClient.get(url);
  }

  get baseUrl(): string {
    return this.httpClient.defaults.baseURL;
  }
}

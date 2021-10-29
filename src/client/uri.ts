import { formatDate } from '../helpers/datetime.helpers';
import type { MementoClient } from './client';
import { plainToClass } from 'class-transformer';
import { MementosResponse } from '../classes';
import { debug } from '../utils';

export class MementoUri {
  constructor(
    protected readonly uri: string,
    protected readonly client: MementoClient,
  ) {}

  protected transformResponse(data: Record<string, unknown>, group: string) {
    debug('transform response');
    return plainToClass(MementosResponse, data, { groups: [group] });
  }

  async mementos(datetime: Date | string) {
    // eg: http://timetravel.mementoweb.org/api/json/20130115102033/http://cnn.com
    const url = `/api/json/${formatDate(datetime)}/${this.uri}`;
    const { data } = await this.client.request(url);
    return this.transformResponse(data, 'mementos');
  }

  async timemap() {
    const url = `/timemap/json/${this.uri}`;
    const { data } = await this.client.request(url);
    return this.transformResponse(data, 'timemap');
  }
}

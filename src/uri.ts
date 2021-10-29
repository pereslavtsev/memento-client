import { formatDate } from './helpers/datetime.helpers';
import type { MementoClient } from './client/client';

export class MementoUri {
  constructor(
    protected readonly uri: string,
    protected readonly client: MementoClient,
  ) {}

  async mementos(datetime: Date | string) {
    // eg: http://timetravel.mementoweb.org/api/json/20130115102033/http://cnn.com
    const url = `/api/json/${formatDate(datetime)}/${this.uri}`;
    const { data } = await this.client.request(url);
    return data;
  }

  async timemap() {
    const url = `/timemap/json/${this.uri}`;
    const { data } = await this.client.request(url);
    return data;
  }
}

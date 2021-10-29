import { MementoClient } from '../src';

jest.setTimeout(30 * 1000);

describe('Mementos (e2e)', () => {
  let client: MementoClient;

  beforeAll(() => {
    client = new MementoClient('https://timetravel.mementoweb.org');
  });

  it('fetch mementos', async () => {
    const data = await client.uri('http://cnn.com').mementos('2013');
    console.log('data', data);
    return 1;
  });

  it('fetch timemap', async () => {
    const data = await client.uri('http://www.lamonitor.com').timemap();
    console.log('data', data);
    return 1;
  });
});

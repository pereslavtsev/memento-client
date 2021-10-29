import { MementoClient } from './client';
import { MementoUri } from './uri';

const API_URL = 'https://test.localhost';

describe('URI', () => {
  let client: MementoClient;

  beforeAll(() => {
    client = new MementoClient(API_URL);
  });

  it('should be instance of uri', () => {
    const uri = client.uri('https://cnn.com');
    expect(uri).toBeInstanceOf(MementoUri);
  });
});

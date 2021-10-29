import { MementoClient } from './client';
import { API_URL } from '../../test/constants';

describe('Client', () => {
  describe('create from url', () => {
    let client: MementoClient;

    beforeAll(() => {
      client = new MementoClient(API_URL);
    });

    it('should be instance of client', () => {
      expect(client).toBeInstanceOf(MementoClient);
    });

    it('base url be equal to mocked', () => {
      expect(client.baseUrl).toBe(API_URL);
    });
  });

  describe('create from config', () => {
    let client: MementoClient;

    beforeAll(() => {
      client = new MementoClient({ baseURL: API_URL, timeout: 30 * 1000 });
    });

    it('should be instance of client', () => {
      expect(client).toBeInstanceOf(MementoClient);
    });

    it('base url be equal to mocked', () => {
      expect(client.baseUrl).toBe(API_URL);
    });
  });
});

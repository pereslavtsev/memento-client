import { MementoClient } from './client';
import { MementoUri } from './uri';
import { API_URL, EXAMPLE_URI } from '../../test/constants';
import { MEMENTOS_RESPONSE } from '../../test/mocks/mementos.mock';
import { MementosResponse } from '../classes';
import { TimemapUriFormats } from '../classes/timemap-uri-formats.class';
import { MementosList } from '../classes/memento-list.class';
import { TIMEMAP_RESPONSE } from '../../test/mocks/timemap.mock';
import { Memento } from '../classes/memento.class';

describe('URI', () => {
  let client: MementoClient;

  beforeAll(() => {
    client = new MementoClient(API_URL);
  });

  it('should be instance of uri', () => {
    const uri = client.uri(EXAMPLE_URI);
    expect(uri).toBeInstanceOf(MementoUri);
  });

  describe('Mementos', () => {
    let response: MementosResponse;

    beforeAll(async () => {
      jest.spyOn(client['httpClient'], 'get').mockImplementation(
        () =>
          new Promise((resolve) => {
            resolve({ data: MEMENTOS_RESPONSE });
          }),
      );
      response = await client.uri(EXAMPLE_URI).mementos('2013');
    });

    it('should be an instance of mementos response', () => {
      expect(response).toBeInstanceOf(MementosResponse);
    });

    it('should have a original uri', () => {
      expect(response.originalUri).toBe(EXAMPLE_URI);
    });

    it('should have a timegate uri', () => {
      expect(response.timegateUri).toBeTruthy();
    });

    it('should have a timemap uri', () => {
      expect(response.timemapUri).toBeInstanceOf(TimemapUriFormats);
    });

    it('should have a mementos list', () => {
      expect(response.mementos).toBeInstanceOf(MementosList);
    });

    it('list should be undefined (timemap only)', () => {
      expect(response.mementos.list).toBeUndefined();
    });

    it('prev should be null if no exists', async () => {
      const noPrev = { ...MEMENTOS_RESPONSE };
      delete noPrev.mementos.prev;
      jest.spyOn(client['httpClient'], 'get').mockImplementation(
        () =>
          new Promise((resolve) => {
            resolve({ data: noPrev });
          }),
      );
      response = await client.uri(EXAMPLE_URI).mementos('2013');
      expect(response.mementos.prev).toBe(null);
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });
  });

  describe('Timemap', () => {
    let response: MementosResponse;

    beforeAll(async () => {
      jest.spyOn(client['httpClient'], 'get').mockImplementation(
        () =>
          new Promise((resolve) => {
            resolve({ data: TIMEMAP_RESPONSE });
          }),
      );
      response = await client.uri(EXAMPLE_URI).timemap();
    });

    it('should be an instance of mementos response', () => {
      expect(response).toBeInstanceOf(MementosResponse);
    });

    it('should have a original uri', () => {
      expect(response.originalUri).toBe(EXAMPLE_URI);
    });

    it('should have a timegate uri', () => {
      expect(response.timegateUri).toBeTruthy();
    });

    it('should have a timemap uri', () => {
      expect(response.timemapUri).toBeInstanceOf(TimemapUriFormats);
    });

    it('mementos array item should be an instance of memento', () => {
      expect(response.mementos.list[0]).toBeInstanceOf(Memento);
    });

    it('prev should be undefined (mementos only)', () => {
      expect(response.mementos.prev).toBeUndefined();
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });
  });
});

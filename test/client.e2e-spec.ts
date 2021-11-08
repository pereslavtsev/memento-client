import MementoClient from '../src';
import { MementosResponse } from '../src/classes';
import { TimemapUriFormats } from '../src/classes/timemap-uri-formats.class';
import { MementosList } from '../src/classes/memento-list.class';
import { Memento } from '../src/classes/memento.class';

jest.setTimeout(30 * 1000);

describe('Client (e2e)', () => {
  let client: MementoClient;

  beforeAll(() => {
    client = new MementoClient('https://timetravel.mementoweb.org');
  });

  describe('mementos (e2e)', () => {
    let response: MementosResponse;

    beforeAll(async () => {
      response = await client.uri('http://cnn.com').mementos('2013');
    });

    it('should be an instance of mementos response', () => {
      expect(response).toBeInstanceOf(MementosResponse);
    });

    it('should have a original uri', () => {
      expect(response.originalUri).toBe('http://cnn.com');
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
  });

  describe('timemap (e2e)', () => {
    let response: MementosResponse;

    beforeAll(async () => {
      response = await client.uri('http://www.lamonitor.com').timemap();
    });

    it('should be an instance of mementos response', () => {
      expect(response).toBeInstanceOf(MementosResponse);
    });

    it('should have a original uri', () => {
      expect(response.originalUri).toBe('http://www.lamonitor.com');
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
  });
});

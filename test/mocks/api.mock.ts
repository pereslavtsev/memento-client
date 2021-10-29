import { API_URL, EXAMPLE_URI } from '../constants';

export const COMMON_DATA = {
  original_uri: EXAMPLE_URI,
  timegate_uri: `${API_URL}/timegate/${EXAMPLE_URI}`,
  timemap_uri: {
    json_format: `${API_URL}/timemap/json/${EXAMPLE_URI}`,
    link_format: `${API_URL}/timemap/link/${EXAMPLE_URI}`,
  },
};

export const MEMENTOS = [
  {
    datetime: '2013-01-01T00:48:12Z',
    uri: [`https://web.archive.org/web/20130101004812/http://www.cnn.com/`],
  },
  {
    datetime: '2021-10-01T16:51:01Z',
    uri: [`https://web.archive.org/web/20211001165101/https://www.cnn.com/`],
  },
  {
    datetime: '2012-12-31T20:44:08Z',
    uri: [
      `https://web.archive.org/web/20121231204408/http://www.cnn.com/`,
      `http://wayback.archive-it.org/all/20121231204408/http://www.cnn.com/`,
    ],
  },
  {
    datetime: '2000-06-20T18:02:59Z',
    uri: [
      `http://wayback.vefsafn.is/wayback/20000620180259/http://cnn.com/`,
      `https://web.archive.org/web/20000620180259/http://cnn.com:80/`,
      `https://arquivo.pt/wayback/20000620180259mp_/http://cnn.com:80/`,
      `http://web.archive.bibalex.org:80/web/20000620180259/http://cnn.com/`,
    ],
  },
  {
    datetime: '2013-01-01T00:25:33Z',
    uri: [`https://web.archive.org/web/20130101002533/http://cnn.com/`],
  },
];

import { COMMON_DATA, MEMENTOS } from './api.mock';

export const TIMEMAP_RESPONSE = {
  ...COMMON_DATA,
  mementos: {
    list: MEMENTOS,
  },
};

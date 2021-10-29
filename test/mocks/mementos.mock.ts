import { COMMON_DATA, MEMENTOS } from './api.mock';

export const MEMENTOS_RESPONSE = {
  ...COMMON_DATA,
  mementos: {
    next: MEMENTOS[0],
    last: MEMENTOS[1],
    prev: MEMENTOS[2],
    first: MEMENTOS[3],
    closest: MEMENTOS[4],
  },
};

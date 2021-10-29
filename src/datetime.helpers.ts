import { DateTime } from 'luxon';

export const MEMENTO_DATE_FORMAT = 'yyyyMMddHHmmss';

function formatDateFromString(datetime: string) {
  return DateTime.fromISO(datetime).toFormat(MEMENTO_DATE_FORMAT);
}

function formatDateFromJSDate(datetime: Date) {
  return DateTime.fromJSDate(datetime).toFormat(MEMENTO_DATE_FORMAT);
}

export function formatDate(datetime: string | number | Date) {
  if (datetime instanceof Date) {
    return formatDateFromJSDate(datetime);
  }
  switch (typeof datetime) {
    case 'string':
      return formatDateFromString(datetime);
    default:
      return null;
  }
}

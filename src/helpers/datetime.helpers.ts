import { DateTime } from 'luxon';

export const MEMENTO_DATE_FORMAT = 'yyyyMMddHHmmss';
const ISO_DATETIME_REGEX =
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;

function isISODate(datetime: string) {
  return !!datetime.match(ISO_DATETIME_REGEX);
}

function formatDateFromString(datetime: string): string {
  if (!isISODate(datetime)) {
    return datetime;
  }
  const dt = DateTime.fromISO(datetime, { zone: 'UTC' });
  return dt.toFormat(MEMENTO_DATE_FORMAT);
}

function formatDateFromJSDate(datetime: Date): string {
  const dt = DateTime.fromJSDate(datetime, { zone: 'UTC' });
  return dt.toFormat(MEMENTO_DATE_FORMAT);
}

export function formatDate(datetime: string | number | Date): string | null {
  if (datetime instanceof Date) {
    return formatDateFromJSDate(datetime);
  }
  if (!datetime) {
    return null;
  }
  switch (typeof datetime) {
    case 'string':
      return formatDateFromString(datetime);
    case 'number':
      return formatDateFromJSDate(new Date(datetime));
    default:
      return null;
  }
}

import { formatDate } from './datetime.helpers';

describe('Datetime helpers', () => {
  it('format datetime from timestamp value', () => {
    const dt = formatDate(Date.UTC(2013, 0, 1).valueOf());
    expect(dt).toContain('20130101');
  });

  it('should be null if passed plain object', () => {
    const dt = formatDate({} as string);
    expect(dt).toBe(null);
  });

  it('should be null if passed empty string', () => {
    const dt = formatDate('');
    expect(dt).toBe(null);
  });

  it('should be null if passed undefined', () => {
    const dt = formatDate(undefined as string);
    expect(dt).toBe(null);
  });

  it('should be null if passed null', () => {
    const dt = formatDate(null as string);
    expect(dt).toBe(null);
  });

  it('format datetime from year as string', () => {
    const dt = formatDate('2013');
    expect(dt).toBe('2013');
  });

  it('format datetime from year and month as string', () => {
    const dt = formatDate('201301');
    expect(dt).toBe('201301');
  });

  it('format datetime from year, month and day as string', () => {
    const dt = formatDate('20130115');
    expect(dt).toBe('20130115');
  });

  it('format datetime from year, month, day and hours as string', () => {
    const dt = formatDate('2013011510');
    expect(dt).toBe('2013011510');
  });

  it('format datetime from year, month, day, hours and minutes as string', () => {
    const dt = formatDate('201301151020');
    expect(dt).toBe('201301151020');
  });

  it('format datetime from full datetime as string', () => {
    const dt = formatDate('20130115102033');
    expect(dt).toBe('20130115102033');
  });

  it('format datetime from ISO string', () => {
    const dt = formatDate('1999-02-02T11:44:21Z');
    expect(dt).toBe('19990202114421');
  });

  it('format datetime from JS Date object (year only)', () => {
    const dt = formatDate(Date.UTC(2013, 0));
    expect(dt).toContain('2013');
  });

  it('format datetime from JS Date object (year and month)', () => {
    const dt = formatDate(Date.UTC(2013, 2));
    expect(dt).toContain('201303');
  });

  it('format datetime from JS Date object (year, month and day)', () => {
    const dt = formatDate(Date.UTC(2013, 2, 1));
    expect(dt).toContain('20130301');
  });

  it('format datetime from JS Date object (year, month, day and hours)', () => {
    const dt = formatDate(Date.UTC(2013, 2, 1, 10));
    expect(dt).toContain('2013030110');
  });

  it('format datetime from JS Date object (year, month, day, hours and minutes)', () => {
    const dt = formatDate(Date.UTC(2013, 2, 1, 10, 20));
    expect(dt).toContain('201303011020');
  });

  it('format datetime from JS Date object (full datetime)', () => {
    const dt = formatDate(Date.UTC(2013, 2, 1, 10, 20, 33));
    expect(dt).toBe('20130301102033');
  });
});

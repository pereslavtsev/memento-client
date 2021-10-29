import { formatDate } from './datetime.helpers';

describe('Datetime helpers', () => {
  it('from year', () => {
    const dt = formatDate('2013');
    expect(dt).toBe('2013');
  });

  it('from year', () => {
    const dt = formatDate(new Date(2013, 2, 1));
    expect(dt).toBe('20130301');
  });
});

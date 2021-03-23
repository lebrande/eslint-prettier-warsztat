import { getSelectedItemOnKey } from '../getSelectedItemOnKey';

describe('getSelectedItemOnKey', () => {
  it('returns 3 when ArrowUp and current: 4', () => {
    expect(getSelectedItemOnKey('ArrowUp', 4)).toBe(3);
  });

  it('returns 5 when ArrowDown and current: 4', () => {
    expect(getSelectedItemOnKey('ArrowDown', 4)).toBe(5);
  });

  it('returns 4 when ArrowRight and current: 4', () => {
    expect(getSelectedItemOnKey('ArrowRight', 4)).toBe(4);
  });

  it('returns 0 when ArrowUp and current: 0', () => {
    expect(getSelectedItemOnKey('ArrowUp', 0)).toBe(0);
  });

  it('returns 9 when ArrowDown and current: 9, listLength: 9', () => {
    expect(getSelectedItemOnKey('ArrowDown', 9, 10)).toBe(9);
  });
});

import { getState, searchStates } from '../state';

const testStates = [
  {
    state: 'Alabama',
    code: 'AL',
  },
  {
    state: 'Alaska',
    code: 'AK',
  },
  {
    state: 'Arizona',
    code: 'AZ',
  },
];

describe('getState', () => {
  it('returns Alaska for AK', () => {
    expect(getState('AK', testStates)).toEqual({
      state: 'Alaska',
      code: 'AK',
    })
  });

  it('returns undefined for empty string', () => {
    expect(getState('', testStates)).toEqual(undefined)
  });
})

describe('searchStates', () => {
  it('returns AL, AK for query: al, key: state', () => {
    expect(searchStates('al', 'state', testStates)).toEqual([
      {
        state: 'Alabama',
        code: 'AL',
      },
      {
        state: 'Alaska',
        code: 'AK',
      },
    ])
  });

  it('returns empty array for query: empty string, key: state', () => {
    expect(searchStates('', 'state', testStates)).toEqual([])
  });
})


import React from 'react';
import { render, screen } from '@testing-library/react';
import StateSearch from '../StateSearch';
import { SearchStateContext } from '../../hooks/useSearchState';
import userEvent from '@testing-library/user-event';

describe('StateSearch', () => {
  it('dropdown list - show on click input and hide on select', () => {
    const testList = [
      { state: 'state1' },
      { state: 'state2' },
      { state: 'state3' },
    ];

    render(
      <SearchStateContext.Provider value={{
        query: '',
        list: testList,
        onPick: jest.fn(),
      }}>
        <StateSearch />
      </SearchStateContext.Provider>
    );

    // check there is no dropdown list rendered
    const menuBefore = screen.queryAllByTestId('dropdown-menu');
    expect(menuBefore.length).toBe(0);

    // click input
    const input = screen.queryByTestId('input');
    userEvent.click(input);

    // dropdown appears
    const menuAfterClickInput = screen.queryAllByTestId('dropdown-menu');
    expect(menuAfterClickInput.length).toBe(1);

    // check items count
    const menuItems = screen.queryAllByTestId('dropdown-item');
    expect(menuItems.length).toBe(testList.length);

    // check state name is displayed
    expect(menuItems[0].textContent).toBe(testList[0].state);

    // menu disappears after click (select) an item
    userEvent.click(menuItems[0]);
    const menuAfterSelectItem = screen.queryAllByTestId('dropdown-menu');
    expect(menuAfterSelectItem.length).toBe(0);
  });
});
import React from 'react';
import StatePage from './StatePage';
import StateSearch from './StateSearch';
import SearchKeySelect from './SearchKeySelect';
import DataTypeSelect from './DataTypeSelect';
import { useSearchState } from '../hooks/useSearchState';
import { SearchStateContext } from '../hooks/useSearchState';

const App = () => {
  const searchState = useSearchState();
  const { currentState } = searchState;

  return (
    <div className="App">
      <SearchStateContext.Provider value={searchState}>
        <SearchKeySelect />
        <StateSearch />
        <DataTypeSelect />
        {currentState && (
          <StatePage />
        )}
      </SearchStateContext.Provider>
    </div>
  );
};

export default App;

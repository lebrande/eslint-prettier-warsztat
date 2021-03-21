import React, { useContext } from 'react';
import { SearchStateContext } from '../hooks/useSearchState';
import Select from './Select';

const SearchKeySelect = () => {
  const {
    setSearchKey,
    searchKey,
  } = useContext(SearchStateContext);

  return (
    <Select
      label="Wyszukuj po"
      onSelect={setSearchKey}
      value={searchKey}
    >
      <option value="state">nazwa</option>
      <option value="code">kod stanu</option>
      <option value="capital_city">stolica</option>
    </Select>
  );
}

export default SearchKeySelect;

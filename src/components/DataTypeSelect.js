import React, { useContext } from 'react';
import { SearchStateContext } from '../hooks/useSearchState';
import Select from './Select';

const DataTypeSelect = () => {
  const {
    setDataType,
    dataType,
  } = useContext(SearchStateContext);

  return (
    <Select
      label="Pokaż dane"
      onSelect={setDataType}
      value={dataType}
    >
      <option value="table">tabela</option>
      <option value="symbols">symbole</option>
      <option value="map">mapa</option>
    </Select>
  );
}

export default DataTypeSelect;

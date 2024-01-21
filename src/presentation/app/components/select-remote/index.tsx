// ----------------------------------------------------------------------------
// SelectRemote Component
// ----------------------------------------------------------------------------
// Author: Antonio Cristovam Neto
// Date: 2024-01-08
// ----------------------------------------------------------------------------

import debounce from 'debounce';
import { FocusEventHandler, useMemo } from 'react';
import Select from 'react-select';

export interface IOptions {
  value: string;
  label: string;
}

interface IProps {
  name: string;
  inputId: string;
  loading: boolean;
  options: IOptions[];
  clearOptions: () => void;
  onChange: (event: IOptions) => void;
  functionSearch: (event: string) => void;

  onBlur?: FocusEventHandler<HTMLInputElement>;
  value?: IOptions;
  isMulti?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  isClearable?: boolean;
  noOptionsMessage?: string;
}

type DynamicObject = {
  [key: string]: any;
};

export function convertToLabelValueArray(
  data: DynamicObject[],
  labelKey: string,
  valueKey: string,
): IOptions[] {
  const options = (data || []).map((item) => ({
    label: item[labelKey],
    value: item[valueKey],
  }));

  return options || [];

}

/**
 * A remote selection component utilizing the react-select library.
 *
 * @component
 *
 * @example
 * // Example usage
 * <SelectRemote
 *   name="mySelect"
 *   inputId="mySelectId"
 *   isMulti={false}
 *   loading={false}
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' }
 *   ]}
 *   clearOptions={() => {}}
 *   onChange={(selectedOption) => console.log(selectedOption)}
 *   functionSearch={(query) => console.log(query)}
 * />
 *
 * @param {string} name - The name of the selection component.
 * @param {string} inputId - The ID of the component's input.
 * @param {boolean} isMulti - Indicates whether it's a multi-selection.
 * @param {boolean} loading - Indicates whether the component is loading options.
 * @param {Array} options - An array of available options.
 * @param {Function} clearOptions - Function to clear options.
 * @param {Function} onChange - Callback called when an option is selected.
 * @param {Function} functionSearch - Function for remote searching.
 * @param {Function} onBlur - Event handler for input blur.
 * @param {IOptions} value - The selected option(s).
 * @param {boolean} isDisabled - Indicates whether the component is disabled.
 * @param {string} placeholder - Placeholder text for the input.
 * @param {boolean} isClearable - Indicates whether the selection can be cleared.
 * @param {string} noOptionsMessage - Message to display when no options are found.
 */
const SelectRemote = ({
  name,
  value,
  onBlur,
  inputId,
  options,
  loading,
  onChange,
  isDisabled,
  placeholder,
  isClearable,
  clearOptions,
  functionSearch,
  isMulti = false,
  noOptionsMessage,
}: IProps) => {
  /**
   * Function to debounce search queries, preventing too many calls.
   */
  const getSearch = useMemo(
    () => debounce((query: string) => functionSearch(query), 1000),
    [],
  );
  /**
   * Handles the search when the input value changes.
   *
   * @param {string} query - The search query.
   */
  const handleSearch = (query: string) => {
    // Clears options before initiating a new search
    clearOptions();
    getSearch(query);
  };

  return (
    <Select
      name={name}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? noOptionsMessage : 'No data found'
      }
      options={options}
      isMulti={isMulti}
      inputId={inputId}
      isClearable={isClearable}
      isDisabled={isDisabled}
      isLoading={loading}
      onBlur={onBlur}
      onInputChange={(event, action) => {
        if (action.action === 'input-change') {
          handleSearch(event);
        }
        if (action.action === 'menu-close' && value === undefined) {
          clearOptions();
        }
      }}
      value={value}
      onChange={onChange}
      placeholder={placeholder || ' '}
    />
  );
};

export default SelectRemote;

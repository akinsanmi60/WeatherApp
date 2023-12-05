import { useDebouncedValue } from '@hooks/useDebounce';
import { InputSearchboxProp } from './type';
import { SetStateAction } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export const InputSearchBox = ({
  onSetTermChange,
  term,
  search,
}: InputSearchboxProp) => {
  const debounceDelay = 100;
  const debouncedTerm = useDebouncedValue(term, debounceDelay);
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    onSetTermChange(e.target.value);
  };

  return (
    <div
      className={`flex items-center rounded-[12px] h-full border text-white border-white px-[16px] py-[5px] w-[100%]`}
    >
      <FaMagnifyingGlass className="" />
      <input
        id="searchInput"
        type="text"
        name=""
        onKeyDown={search}
        onChange={handleChange}
        value={debouncedTerm}
        placeholder="Enter city name"
        className="outline-[0px] text-md text-white focus:outline-0 focus:border-none border-[0px] px-2 py-[4px] w-full placeholder:text-[13.5px]  PhoneInputInput bg-transparent"
      />
    </div>
  );
};

import { InputSearchBox } from '@shared/input';
import { fetchData } from '@utils/api';
import { useGetLocationContext } from 'context/geoLocationProvider';
import { useModalContext } from 'context/modelProvider';
import { useState } from 'react';

function Header() {
  const { setCurrentLocation } = useGetLocationContext();
  const { handleModalOpen } = useModalContext();
  const [inputValue, setInputValue] = useState('');

  const getData = async () => {
    const response = await fetchData(inputValue);
    setCurrentLocation({
      searchData: response,
    });
  };

  const search = (evt: { key: string }) => {
    if (evt.key === 'Enter') {
      if (inputValue === '') return alert('Please enter a city name');
      getData();
    }
    setInputValue('');
  };

  return (
    <div className="h-[60px] py-3">
      <div className="max-content">
        <div className="container">
          <div className="flex items-center justify-between w-full">
            <div className="w-[35%] flex items-center gap-3">
              <InputSearchBox
                onSetTermChange={setInputValue}
                term={inputValue}
                search={search}
              />
            </div>

            <div className="w-[50%] flex justify-end gap-x-[15px]">
              <div className="">
                <button
                  onClick={() => handleModalOpen('favouriteList')}
                  className="w-full h-[40px] px-[8px] text-[13px] font-[600] rounded-[12px] bg-slate-200 flex items-center gap-2 justify-center hover:bg-cyan-500"
                >
                  Favourite List
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => handleModalOpen('detailPage')}
                  className="w-full h-[40px] px-[8px] text-[13px] font-[600] rounded-[12px] bg-slate-200 flex items-center gap-2 justify-center hover:bg-cyan-500"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

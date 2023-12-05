import CustomButton from '@shared/button';
import { useFavouriteContext } from 'context/addFavoriteProvider';
import React, { useState } from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { IWeatherData } from 'types/weather';

function CustomTextarea({ name }: { name: string }) {
  const { favouriteList, inListItem, setFavouriteList } = useFavouriteContext();
  const [note, setNote] = useState('');

  const memorisedFav = React.useMemo(() => {
    return favouriteList.find(item => item.name === name);
  }, [favouriteList, name, localStorage]);

  const handleSave = () => {
    if (inListItem(name)) {
      if (note === '') {
        return alert('Please add a note');
      }

      if (memorisedFav?.note_added?.length === 2)
        return alert('You can not add more than 2 items');

      const clonedFavouriteList = Array.from(favouriteList);

      if (memorisedFav) {
        const filteredFavIndex = favouriteList.findIndex(
          obj => obj.name === memorisedFav?.name,
        );
        const newNoteArray = [
          ...(memorisedFav?.note_added || []),
          note,
        ] as string[];
        const singleFav = favouriteList[favouriteList.indexOf(memorisedFav)];
        if (singleFav) {
          singleFav.note_added = newNoteArray;
        }
        clonedFavouriteList.splice(filteredFavIndex, 1, singleFav);
        setFavouriteList(clonedFavouriteList);
        localStorage.setItem(
          'favoriteWeather',
          JSON.stringify(clonedFavouriteList),
        );
        setNote('');
      }
      return;
    } else {
      return alert('Add location to your list first to add a note');
    }
  };

  const handleRemove = (selectedFav: IWeatherData, idx: number) => {
    const clonedFavouriteList = Array.from(favouriteList);
    const filteredFav = favouriteList.filter(
      obj => obj.name === selectedFav.name,
    );
    const filteredFavIndex = favouriteList.findIndex(
      obj => obj.name === selectedFav.name,
    );
    const filteredNote = filteredFav.map(obj => ({
      ...obj,
      note_added: obj?.note_added?.filter((_item, index) => index !== idx),
    }));

    clonedFavouriteList.splice(filteredFavIndex, 1, filteredNote[0]);

    setFavouriteList(clonedFavouriteList);
    localStorage.setItem(
      'favoriteWeather',
      JSON.stringify(clonedFavouriteList),
    );
  };

  return (
    <div className="p-[10px] mt-[20px]">
      <textarea
        minLength={10}
        maxLength={600}
        cols={30}
        rows={10}
        placeholder="Add a note"
        className="outline-0 border w-full rounded-[12px] h-[200px] p-[10px] border-slate-300"
        onChange={e => setNote(e.target.value)}
        disabled={memorisedFav?.note_added?.length === 2}
      />
      <div className="mt-[15px] flex justify-end">
        <CustomButton
          title="Add note"
          handleClick={handleSave}
          disabled={memorisedFav?.note_added?.length === 2}
        />
      </div>

      {memorisedFav && memorisedFav?.note_added?.length! > 0 && (
        <div className="mt-[15px] p-[10px]">
          <h1 className="text-[18px] font-[600]">List of Added Notes</h1>
          {memorisedFav?.note_added?.map((item, index) => (
            <ul key={index} className="list-disc px-[5px]">
              <li className="text-[15px] font-[500] mt-[25px] first:mt-[10px] flex justify-between items-center">
                <p className="leading-[22px]">{item}</p>
                <p className="cursor-pointer">
                  <IoCloseCircleSharp
                    className="text-2xl hover:text-red-500"
                    onClick={() => handleRemove(memorisedFav, index)}
                  />
                </p>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomTextarea;

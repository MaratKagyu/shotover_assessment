import React, {useCallback, useMemo, useState} from "react";
import classes from "./ShowDogsFound.module.scss";
import FoundDogCard from "./FoundDogCard/FoundDogCard";

const ShowDogsFound = () => {
  const [
    searchText,
    setSearchText,
  ] = useState('');

  const handleSearchTextChange = useCallback((event) => {
    setSearchText(event.currentTarget.value);
  }, []);

  const dogList = useMemo(() => {
    return (new Array(50)).fill(0).map((item, itemIdx) => ({
      id: itemIdx,
      imageUrl: '/logo512.png',
      name: `Dog No ${itemIdx + 1}`,
    }));
  }, []);

  const filteredDogList = useMemo(() => {
    if (!searchText) {
      return dogList;
    }

    const lowerCaseSearchText = searchText.toLowerCase();

    return dogList.filter(
      (dogData) => dogData.name.toLowerCase().split(lowerCaseSearchText).length > 1
    )
  }, [dogList, searchText]);

  return (
    <div className={classes.ShowDogs}>
      <div className={classes.ShowDogs__QuickSearch}>
        <input
          type="text"
          placeholder="Quick Search"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>

      <div className={classes.ShowDogs__List}>
        {filteredDogList.map((dogData) => (
          <FoundDogCard
            key={dogData.id}
            name={dogData.name}
            imageUrl={dogData.imageUrl}
            isLoading={false}
          />
        ))}
      </div>
    </div>
  )
};

export default ShowDogsFound;

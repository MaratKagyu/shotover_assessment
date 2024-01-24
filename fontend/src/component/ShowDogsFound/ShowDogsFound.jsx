import React, {useCallback, useEffect, useMemo, useState} from "react";
import classes from "./ShowDogsFound.module.scss";
import FoundDogCard from "./FoundDogCard/FoundDogCard";
import useDogListManager from "../../hook/useDogListManager";

const ShowDogsFound = (
  {
    count = 50,
  }
) => {
  const {
    load,
    dogList,
    isLoading,
    requestedCount,
    errorMessage,
  } = useDogListManager();

  useEffect(() => {
    // If the dog list wasn't loaded before, load it manually
    // (if the user reloaded the page, for example)
    if ((isLoading || dogList) && (count === requestedCount)) {
      return;
    }
    load(count);
  }, [dogList, isLoading, load, count, requestedCount]);

  const [
    searchText,
    setSearchText,
  ] = useState('');

  const handleSearchTextChange = useCallback((event) => {
    setSearchText(event.currentTarget.value);
  }, []);

  const filteredDogList = useMemo(() => {
    if (!searchText || !dogList) {
      return dogList;
    }

    const lowerCaseSearchText = searchText.toLowerCase();

    return dogList.filter(
      (dogData) => dogData.breed.toLowerCase().split(lowerCaseSearchText).length > 1
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

      {(!!errorMessage) && (
        <div className={classes.ShowDogs__Error}>
          {errorMessage}
        </div>
      )}

      {filteredDogList ? (
        <>
          {(!filteredDogList.length && !errorMessage) && (
            <div className={classes.ShowDogs__NeutralNotification}>
              No dogs found
            </div>
          )}
          <div className={classes.ShowDogs__List}>
            {filteredDogList.map((dogData) => (
              <FoundDogCard
                key={dogData.id}
                name={dogData.breed}
                imageUrl={dogData.image}
                isLoading={false}
              />
            ))}
          </div>
        </>
      ) : (
        // Loading state
        <div className={classes.ShowDogs__List}>
          {(new Array(count)).fill(0).map((item, itemIdx) => (
            <FoundDogCard
              key={itemIdx}
              name="Anonymous"
              imageUrl=""
              isLoading={true}
            />
          ))}
        </div>
      )}
    </div>
  )
};

export default ShowDogsFound;

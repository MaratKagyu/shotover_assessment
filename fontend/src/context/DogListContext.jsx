import {createContext, useCallback, useMemo, useState} from "react";
import ApiRoutes from "../tools/Api/ApiRoutes";

export const DogListContext = createContext(null);

export const DogListProvider = ({ children }) => {
  const [dogList, setDogList] = useState(null);
  const [requestedCount, setRequestedCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const load = useCallback(async (count) => {
    const validatedCount = parseInt(count, 10);
    if (
      !validatedCount
      || ((isLoading || dogList) && (count === requestedCount))
    ) {
      return;
    }
    setDogList(null);
    setErrorMessage(null);
    setRequestedCount(count);
    setIsLoading(true);

    try {
      // TODO: Remove this timeout
      await new Promise((success) => setTimeout(success, 1000));

      const result = await ApiRoutes.getDogList(validatedCount);
      setDogList(result.data.message.map((dogRecord, recordIdx) => ({
        id: recordIdx + 1,
        // Since Breed is extracted by the Backend, no need to handle this here
        // But since it was mentioned in the task, I'll leave a commented line extracting the breed
        // Uncomment this:
        // breed: dogRecord.image.replace(/^.*breeds\/([^/]+).*$/i, '$1'),
        breed: dogRecord.breed,
        // Example: "https://images.dog.ceo/breeds/sheepdog-english/n02105641_4577.jpg"
        image: dogRecord.image,
      })));
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Unexpected Error');
      setDogList([]);
    } finally {
      setIsLoading(false);
    }
  }, [requestedCount, dogList, isLoading]);

  return (
    <DogListContext.Provider
      value={{
        load,
        dogList,
        isLoading,
        requestedCount,
        errorMessage,
      }}
    >
      { children }
    </DogListContext.Provider>
  )
};

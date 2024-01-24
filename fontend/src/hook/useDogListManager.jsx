import {useContext} from "react";
import {DogListContext} from "../context/DogListContext";

const useDogListManager = () => {
  const context = useContext(DogListContext);
  if (!context) {
    throw new Error('useDogListManager must be used within a DogListProvider');
  }
  return context;
};

export default useDogListManager;

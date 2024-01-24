import React from "react";
import DefaultLayout from "../component/DefaultLayout/DefaultLayout";
import SearchDogs from "../component/SearchDogs/SearchDogs";
import {DogListProvider} from "../context/DogListContext";

const HomePage = () => {
  return (
    <DefaultLayout>
      <SearchDogs />
    </DefaultLayout>
  )
};

export default HomePage;

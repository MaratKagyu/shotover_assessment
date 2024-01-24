import React from "react";
import DefaultLayout from "../../component/DefaultLayout/DefaultLayout";
import ShowDogsFound from "../../component/ShowDogsFound/ShowDogsFound";
import {DogListProvider} from "../../context/DogListContext";

const CatalogPage = () => {
  return (
    <DefaultLayout>
      <ShowDogsFound />
    </DefaultLayout>
  )
};

export default CatalogPage;

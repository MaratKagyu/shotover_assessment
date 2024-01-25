import React, {useMemo} from "react";
import DefaultLayout from "../../component/DefaultLayout/DefaultLayout";
import ShowDogsFound from "../../component/ShowDogsFound/ShowDogsFound";
import {useLocation} from "react-router-dom";

const DEFAULT_COUNT = 10;

const CatalogPage = () => {
  const { search } = useLocation();
  const count = useMemo(() => {
    const queryParams = new URLSearchParams(search);
    const countString = queryParams.get('count') || DEFAULT_COUNT;
    return parseInt(countString, 10) || DEFAULT_COUNT;
  }, [search]);

  return (
    <DefaultLayout>
      <ShowDogsFound count={count}/>
    </DefaultLayout>
  )
};

export default CatalogPage;

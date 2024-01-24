import React, {useCallback, useState} from "react";
import classes from "./SearchDogs.module.scss";
import SearchDogsI18n from "./SearchDogs.i18n";
import useDogListManager from "../../hook/useDogListManager";
import {useNavigate} from "react-router-dom";
import AppRoutes from "../../tools/AppRoutes";

const SearchDogs = () => {
  const navigate = useNavigate();
  const {load, isLoading} = useDogListManager();
  const [amount, setAmount] = useState(5);

  const handleAmountChange = useCallback((event) => {
    setAmount(parseInt(event.currentTarget.value) || 0);
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    if (!amount) {
      return;
    }
    // Although we don't need to load the catalog here,
    // it was specifically said in the task that the app has to store the API response first,
    // and go to the catalog page after
    await load(amount);
    navigate(AppRoutes.catalog(amount));
  }, [amount, load, navigate]);

  return (
    <div className={classes.SearchForm}>
      <form
        onSubmit={handleSubmit}
        className={classes.SearchForm__Form}
      >
        <label
          className={classes.SearchForm__Label}
        >
          Show me:
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className={classes.SearchForm__TextInput}
          />
          {SearchDogsI18n.dogs(amount)}
        </label>
        <button
          type="submit"
          className={classes.SearchForm__Button}
          disabled={!amount || isLoading}
        >
          {isLoading ? 'Loading...' : 'Show'}
        </button>
      </form>
    </div>
  )
};

export default SearchDogs;

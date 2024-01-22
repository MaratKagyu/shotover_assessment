import React, {useCallback, useState} from "react";
import classes from "./SearchDogs.module.scss";
import SearchDogsI18n from "./SearchDogs.i18n";

const SearchDogs = () => {
  const [
    isLoading,
    setIsLoading,
  ] = useState(false);
  const [
    amount,
    setAmount
  ] = useState(5);

  const handleAmountChange = useCallback((event) => {
    setAmount(parseInt(event.currentTarget.value) || 0);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (!amount) {
      return;
    }
    setIsLoading(true);
  }, [amount]);

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

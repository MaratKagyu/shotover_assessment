import React from "react";
import classes from "./FoundDogCard.module.scss";
import clsx from "clsx";

const FoundDogCard = (
  {
    name,
    imageUrl,
    isLoading = false,
  }
) => {
  return (
    <div
      className={clsx({
        [classes.Card]: true,
        [classes.Card_isLoading]: isLoading,
      })}
    >
      {(!isLoading) ? (
        // Ready State
        <img
          src={imageUrl}
          alt={name}
          className={classes.Card__Image}
        />
      ) : (
        // Loading State
        <div className={classes.Card__Image} />
      )}

      <strong className={classes.Card__Title}>
        {name}
      </strong>
    </div>
  )
};

export default FoundDogCard;

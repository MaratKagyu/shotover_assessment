import React from "react";
import classes from "./DefaultLayout.module.scss";

const DefaultLayout = (
  {
    children
  }
) => {
  return (
    <div className={classes.DefaultLayout}>
      <div className={classes.DefaultLayout__Menu}>
        <div className={classes.DefaultLayout__MenuLeft}>
          <a
            href="/"
            className={classes.DefaultLayout__Logo}
          >
            Dog Catalog
          </a>
        </div>
        <div className={classes.DefaultLayout__MenuRight}>
          <a href="/" className={classes.DefaultLayout__Link}>
            Home
          </a>
          <a href="/catalog" className={classes.DefaultLayout__Link}>
            Catalog
          </a>
        </div>
      </div>
      <div className={classes.DefaultLayout__Body}>
        {(!!children) && children}
      </div>
    </div>
  )
};

export default DefaultLayout;

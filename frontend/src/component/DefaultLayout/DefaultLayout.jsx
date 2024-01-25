import React from "react";
import classes from "./DefaultLayout.module.scss";
import AppRoutes from "../../tools/AppRoutes";
import {Link} from "react-router-dom";

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
          <Link
            to={AppRoutes.home()}
            className={classes.DefaultLayout__Link}
          >
            Home
          </Link>
          <Link to={AppRoutes.catalog()} className={classes.DefaultLayout__Link}>
            Catalog
          </Link>
        </div>
      </div>
      <div className={classes.DefaultLayout__Body}>
        {(!!children) && children}
      </div>
    </div>
  )
};

export default DefaultLayout;

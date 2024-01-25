import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./HomePage";
import CatalogPage from "./catalog/CatalogPage";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/catalog',
    element: <CatalogPage />
  },
]);

export default appRouter;

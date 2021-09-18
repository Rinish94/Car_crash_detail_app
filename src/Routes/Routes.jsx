import React from "react";
import { Route, Switch } from "react-router";
import DetailsPage from "../Components/DeatilsPage/DetailsPage";
import MainPage from "../Components/MainPage/MainPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/details/:id">
          <DetailsPage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

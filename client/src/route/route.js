import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../container/home-container";
import AppDetails from "../container/app-details-container";

const route = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />;
      <Route exact path="/appDetails" component={AppDetails} />;
      <Route exact path="**" component={Home} />;
    </Switch>
  );
};
export default route;

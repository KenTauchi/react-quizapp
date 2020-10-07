import React from "react";
import { Route, Switch } from "react-router";
import { Home, Quiz, Score } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"(/)?"} component={Home} />
      <Route exact path={"/ken"} component={Quiz} />
      <Route exact path={"/rina"} component={Quiz} />
      <Route exact path={"/score"} component={Score} />
    </Switch>
  );
};

export default Router;

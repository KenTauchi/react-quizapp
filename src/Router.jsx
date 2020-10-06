import React from "react";
import { Route, Switch } from "react-router";
import { Home, Quiz } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"(/)?"} component={Home} />
      <Route exact path={"/ken"} component={Quiz} />
      <Route exact path={"/rina"} component={Quiz} />
    </Switch>
  );
};

export default Router;

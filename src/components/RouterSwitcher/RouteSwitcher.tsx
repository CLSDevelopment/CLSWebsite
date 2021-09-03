import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PublicRoutes } from "routes/PublicRoutes";

export const RouteSwitcher = ({ path }) => {
  const routes = PublicRoutes.map((route, index) => {
    const routeProps = { ...route, path: path + route.path };
    return <Route exact {...routeProps} key={route.path + index} />;
  });
  return (
    <React.Suspense fallback="loading...">
      <Switch>
        <Redirect exact from="/home" to="/" />
        {routes}
      </Switch>
    </React.Suspense>
  );
};

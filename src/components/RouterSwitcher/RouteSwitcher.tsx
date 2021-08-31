import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PublicRoutes } from 'routes/PublicRoutes';


export const RouteSwitcher = ({ path }) => {
  const routes = PublicRoutes.map((route, index) => {
    const routeProps = { ...route, path: path + route.path };
    return <Route exact {...routeProps} key={route.path + index} />;
  });
  return (
    <>
      <div className="public">
        <div className="content">
          <React.Suspense fallback="loading...">
            <Switch>
              <Redirect exact from="/" to="home" />
              {routes}
            </Switch>
          </React.Suspense>
        </div>
      </div>
    </>
  );
};

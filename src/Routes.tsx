import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import asyncComponent from './Utilities/asyncComponent';

/**
 * Aysnc imports of components
 *
 * https://webpack.js.org/guides/code-splitting/
 * https://reactjs.org/docs/code-splitting.html
 *
 * pros:
 *      1) code splitting
 *      2) can be used in server-side rendering
 * cons:
 *      1) nameing chunk names adds unnecessary docs to code,
 *         see the difference with DashboardMap and InventoryDeployments.
 *
 */
const SamplePage = asyncComponent(() =>
  import(
    /* webpackChunkName: "SamplePage" */ './SmartComponents/SamplePage/SamplePage'
  )
);
// const Rules = asyncComponent(() => import(/* webpackChunkName: "Rules" */ './PresentationalComponents/Rules/ListRules'));
const paths = {
  home: '/',
  samplepage: '/samplepage'
};

interface Props {
  childProps: any;
}

const InsightsRoute = ({ component: Component, rootClass, ...rest }: any) => {
  const root = document.getElementById('root');
  if (root != null) {
    root.removeAttribute('class');
    root.classList.add(`page__${rootClass}`, 'pf-c-page__main');
    root.setAttribute('role', 'main');
  }
  return <Route {...rest} component={Component} />;
};

/**
 * the Switch component changes routes depending on the path.
 *
 * Route properties:
 *      exact - path must match exactly,
 *      path - https://prod.foo.redhat.com:1337/insights/advisor/rules
 *      component - component to be rendered when a route has been chosen.
 */
export const Routes = (props: Props) => {
  const path = props.childProps.location.pathname;
  return (
    <Switch>
      <InsightsRoute
        path={paths.home}
        component={SamplePage}
        rootClass="home"
      />
      <InsightsRoute
        path={paths.samplepage}
        component={SamplePage}
        rootClass="samplepage"
      />

      {/* Finally, catch all unmatched routes */}
      <Route
        render={() => {
          let isRouteDefined = false;
          Object.keys(paths).forEach(p => {
            if (p === path) {
              isRouteDefined = true;
            }
          });
          return isRouteDefined ? null : <Redirect to={paths.samplepage} />;
        }}
      />
    </Switch>
  );
};

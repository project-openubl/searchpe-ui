import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import asyncComponent from './Utilities/asyncComponent';

const SearchPage = asyncComponent(() => import(/* webpackChunkName: "SamplePage" */ './Pages/Search/Search'));

const paths = {
    search: '/search'
};

interface Props {
    childProps: any
};

const InsightsRoute = ({ component: Component, rootClass, ...rest }) => {
    const root = document.getElementById('root');
    if (root) {
        root.removeAttribute('class');
        root.classList.add(`page__${rootClass}`, 'pf-c-page__main');
        root.setAttribute('role', 'main');
    }
    return (<Route {...rest} component={Component} />);
};

export const Routes = (props: Props) => {
    const path = props.childProps.location.pathname;

    return (
        <Switch>
            <InsightsRoute path='/' component={SearchPage} rootClass='home' />
            <InsightsRoute path={paths.search} component={SearchPage} rootClass='search' />
        </Switch>
    );
};

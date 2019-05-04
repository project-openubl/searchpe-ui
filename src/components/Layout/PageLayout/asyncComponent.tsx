import React, { Component } from 'react';
import BackgroundImage from '../Background/Background';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const PageLayout = (Component: any) => {
  class LayoutComponent extends Component {
    render() {
      return (
        <React.Fragment>
          <BackgroundImage />
          <div className="pf-c-page" id="page-layout-default-nav">
            <a
              className="pf-c-skip-to-content pf-c-button pf-m-primary"
              href="#main-content-page-layout-default-nav"
            >
              Skip to content
            </a>
            <Header />
            <Sidebar />
            <main role="main" className="pf-c-page__main">
              <Component />
            </main>
          </div>
        </React.Fragment>
      );
    }
  }
  return LayoutComponent;
};

export default PageLayout;

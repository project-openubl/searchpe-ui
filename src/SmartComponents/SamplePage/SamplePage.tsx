import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import './sample-page.scss';
import PageLayout from '../../components/Layout/PageLayout/asyncComponent';

// const PageHeader2 = asyncComponent(() => import('../../PresentationalComponents/PageHeader/page-header'));
// const PageHeaderTitle2 = asyncComponent(() => import('../../PresentationalComponents/PageHeader/page-header-title'));

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */
class SamplePage extends Component {
  render() {
    return (
      <section className="pf-c-page__main-section pf-m-light">
        <div className="pf-c-content">
          <h1>Main Title</h1>
          <p>
            Body text should be Overpass Regular at 16px. It should have leading
            of 24px because <br />
            of it’s relative line height of 1.5.
          </p>
        </div>
      </section>
    );
  }
}

// export default withRouter(SamplePage);

export default PageLayout(SamplePage);

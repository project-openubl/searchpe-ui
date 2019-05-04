import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import { Routes } from './Routes';

class App extends React.Component<any> {
  constructor(props: PropTypes) {
    super(props);
  }

  render() {
    return <Routes childProps={this.props} />;
  }
}

interface PropTypes {
  history: any;
}

// const App: React.FC = () => {
//   return (
//     <div>
//       <BackgroundImage />
//       <div className="pf-c-page" id="page-layout-default-nav">
//         <a className="pf-c-skip-to-content pf-c-button pf-m-primary" href="#main-content-page-layout-default-nav">
//           Skip to content
//         </a>
//         <Header />
//         <Sidebar />
//       </div>
//     </div>
//   );
// };

export default withRouter(App);

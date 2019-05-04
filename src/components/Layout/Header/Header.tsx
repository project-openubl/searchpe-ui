import React from 'react';
import logo from '../../../images/logo.png';
import avatar from '../../../images/avatar.svg';

const Header: React.FC = () => {
  return (
    <header role="banner" className="pf-c-page__header">
      <div className="pf-c-page__header-brand">
        <div className="pf-c-page__header-brand-toggle">
          <button
            className="pf-c-button pf-m-plain"
            id="page-layout-expandable-nav-nav-toggle"
            aria-label="Global navigation"
            aria-expanded="true"
            aria-controls="page-layout-expandable-nav-expandable-nav"
          >
            <i className="fas fa-bars" aria-hidden="true" />
          </button>
        </div>
        <a className="pf-c-page__header-brand-link">
          <img className="pf-c-brand" src={logo} alt="Patternfly Logo" />
        </a>
      </div>
      <div className="pf-c-page__header-tools">
        <div className="pf-c-page__header-tools-group pf-m-icons">
          <button className="pf-c-button pf-m-plain" aria-label="Alerts">
            <i className="fas fa-bell" aria-hidden="true" />
          </button>
          <button className="pf-c-button pf-m-plain" aria-label="Settings">
            <i className="fas fa-cog" aria-hidden="true" />
          </button>
        </div>
        <div className="pf-c-page__header-tools-group">
          <div className="pf-c-dropdown">
            <button
              className="pf-c-dropdown__toggle pf-m-mobile pf-m-plain"
              id="page-layout-expandable-nav-dropdown-kebab-right-aligned-1-button"
              aria-expanded="false"
              aria-label="Actions"
            >
              <i className="fas fa-ellipsis-v" aria-hidden="true" />
            </button>
            <ul
              className="pf-c-dropdown__menu pf-m-align-right"
              aria-labelledby="page-layout-expandable-nav-dropdown-kebab-right-aligned-1-button"
              hidden
            >
              <li>
                <a className="pf-c-dropdown__menu-item" href="#">
                  Link
                </a>
              </li>
              <li>
                <button className="pf-c-dropdown__menu-item">Action</button>
              </li>
              <li>
                <a className="pf-c-dropdown__menu-item pf-m-disabled" href="#">
                  Disabled Link
                </a>
              </li>
              <li>
                <button className="pf-c-dropdown__menu-item" disabled>
                  Disabled Action
                </button>
              </li>
              <li className="pf-c-dropdown__separator" role="separator" />
              <li>
                <a className="pf-c-dropdown__menu-item" href="#">
                  Separated Link
                </a>
              </li>
            </ul>
          </div>
          <div className="pf-m-user">
            <div className="pf-c-dropdown">
              <button
                className="pf-c-dropdown__toggle pf-m-plain"
                id="page-layout-expandable-nav-dropdown-button"
                aria-expanded="false"
              >
                <span className="pf-c-dropdown__toggle-text">John Smith</span>
                <i
                  className="fas fa-caret-down pf-c-dropdown__toggle-icon"
                  aria-hidden="true"
                />
              </button>
              <div className="pf-c-dropdown__menu" hidden>
                [Panel contents here]
              </div>
            </div>
          </div>
        </div>
        <img className="pf-c-avatar" src={avatar} alt="Avatar Image" />
      </div>
    </header>
  );
};

export default Header;

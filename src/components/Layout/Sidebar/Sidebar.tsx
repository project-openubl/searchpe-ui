import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="pf-c-page__sidebar">
      <div className="pf-c-page__sidebar-body">
        <nav
          className="pf-c-nav"
          id="page-layout-default-nav-primary-nav"
          aria-label="Global"
        >
          <ul className="pf-c-nav__list">
            <li className="pf-c-nav__item">
              <a
                href="#"
                className="pf-c-nav__link pf-m-current"
                aria-current="page"
              >
                System Panel
              </a>
            </li>
            <li className="pf-c-nav__item">
              <a href="#" className="pf-c-nav__link">
                Policy
              </a>
            </li>
            <li className="pf-c-nav__item">
              <a href="#" className="pf-c-nav__link">
                Authentication
              </a>
            </li>
            <li className="pf-c-nav__item">
              <a href="#" className="pf-c-nav__link">
                Network Services
              </a>
            </li>
            <li className="pf-c-nav__item">
              <a href="#" className="pf-c-nav__link">
                Server
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './app';
import ScrollToTop from '../utils/route_utils';

export default ({ store }) => (
    <HashRouter>
      <ScrollToTop>

        <App />
      </ScrollToTop>

    </HashRouter>
);

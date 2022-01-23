import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import Dashboard from 'components/dashboard';
import Footer from 'components/footer';
import Nav from 'components/nav';
import ScrollToTop from 'components/scroll-to-top';
import Global from 'ui/global';
import l from 'ui/layout';
import th from 'ui/theme';

import ShipperProjections from './projections';

const client = new ApolloClient({
  uri: process.env.REACT_APP_DATABASE_API_URL,
  cache: new InMemoryCache(),
});

const Main = styled(l.Flex)({
  flexDirection: 'column',
  minHeight: '100vh',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <ThemeProvider theme={th}>
          <Main id="main">
            <Nav />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/projections" component={ShipperProjections} />
              <Redirect to="/" />
            </Switch>
            <Footer />
            <ScrollToTop />
          </Main>
          <Global />
        </ThemeProvider>
      </QueryParamProvider>
    </Router>
  </ApolloProvider>
);

export default App;

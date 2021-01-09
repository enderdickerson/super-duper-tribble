import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Restaurant from './components/Restaurant';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 20px;
`;

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => (
  <Router history={history}>
    <MainColumn>
      <Route exact path="/restaurant/:id" component={Restaurant} />
    </MainColumn>
  </Router>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Browse from './components/Browse';
import Restaurant from './components/Restaurant';
import Random from './components/Random';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="/restaurant/:id" component={Restaurant} />
        <Route exact path="/random" component={Random} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { EuijinPage, JiYeongPage, MainPage, SoRyeongPage } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <MainPage />} />
        <Route exact path="/euijin" component={() => <EuijinPage />} />
        <Route exact path="/jiyeong" component={() => <JiYeongPage />} />
        <Route exact path="/soryeong" component={() => <SoRyeongPage />} />
      </Switch>
    </Router>
  );
};

export default App;

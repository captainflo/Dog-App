import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from '../Screen/Welcome';
import Breed from '../Screen/Breed';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/breed/:id" component={Breed} />
    </BrowserRouter>
  );
};

export default App;

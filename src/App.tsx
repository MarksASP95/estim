import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import EstimLayout from './components/EstimLayout/EstimLayout';

function App() {

  return (
    <div>
      <Router>
        <EstimLayout />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {Provider} from 'react-redux';

import store from './Store';
import Route from './routes';
import './global.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <div className="background"></div>
          <Route/>
      </div>
    </Provider>
  );
}

export default App;

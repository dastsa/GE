import React from 'react';
import { render } from 'react-dom';
import CounterContainer from './containers/Counter'

import { createStore } from 'redux'
import { counterApp} from './reducers'

import { Provider } from 'react-redux'
import './App.css';
import Principal from './Principal';

const store = createStore(counterApp)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <CounterContainer/>
      </Provider>
    </div>
  );
}

export default App;
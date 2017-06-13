import React from 'react';
import { render } from 'react-dom';

// Components
import Main from './Main.jsx';
import First from './First.jsx';
import Second from './Second.jsx';
import ShowName from './ShowName.jsx';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// React Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

let store = createStore(reducers)
const history = syncHistoryWithStore(createBrowserHistory(), store);

render(
    <Provider store={store}>
        <Router history={history}>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/editnum">Edit number</Link></li>
              <li><Link to="/doublenum">Double number</Link></li>
            </ul>
            <hr/>            
            <Route path='/' exact component={Main}/>         
            <Route path='/editnum' exact component={First}/>         
            <Route path='/doublenum' exact component={Second}/>         
          </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);

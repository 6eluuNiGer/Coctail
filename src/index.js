import React                       from 'react';
import ReactDOM                    from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App                         from './App';
import './assets/sass/index.scss';
import CombinedContexts            from './util/CombinedContexts';

const app = (
  <Router>
    <CombinedContexts>
      <App/>
    </CombinedContexts>
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
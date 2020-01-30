import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MainForm from './components/MainForm';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import classes from '../src/App.css';
import { FirstPage } from './pages/First';
const App = () => {
  return (
    <div className="App" style={style}>
      <Route
        path=""
        render={props => <MainForm {...props} />}
      />
      {/* <Link to="/" className="menu" >menu</Link> */}
      <Switch>
        <Route
          exact
          path="/"
          component={FirstPage}
          render={props => <MainForm {...props} />}
        />
        <Route
          path="/recipe"
          component={Recipe}
          render={props => <MainForm {...props} />}
        />
        <Route
          exact
          path="/home"
          component={Home}
          render={props => <MainForm {...props} />}
        />
      </Switch>
    </div>
  );
};

// Background image
const style = {
  backgroundImage: `url(${require('./assets/img/bg.png')})`
};
export default App;


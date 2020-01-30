import React from 'react';
import classes from './Home.css';
import MainForm from '../components/MainForm';
import Recipes from '../pages/Recipes';
const Home = () => {
  return (
    
    <div className="Home">
      <React.Fragment>
        <div className="title">Start adding your ingredients here</div>
        <div className="title_low">Alredy Have</div>
        <div className="form">
          <Recipes />
        </div>
      </React.Fragment>
    </div>
    
  );
};

export default Home;
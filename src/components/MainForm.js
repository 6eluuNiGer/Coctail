import React, { useState, useContext } from 'react';
import { RecipesContext } from '../util/RecipesContext';
import { HistoryContext } from '../util/HistoryContext';
import classes from '../components/MainForm.css'



const MainForm = ({ history }) => {
  const [query, setQuery] = useState('');
  const [ingrid, setIngrid] = useState([]);
  const { setSearchQuery } = useContext(RecipesContext);
  const { setRouterHistory } = useContext(HistoryContext);
  setRouterHistory(history);


  const handleRemoveClick = value => {
    const filteredIngredients = ingrid.filter(ingredient => ingredient !== value)
    setIngrid(filteredIngredients)
    setSearchQuery(filteredIngredients)
    /* console.log(e.target.name) */
  }
  const getRecipes = e => {
    e.preventDefault();
    setIngrid([...ingrid, query]);
    setSearchQuery([...ingrid, query]);
    // Reset input field to default value
    setQuery('');
    history.push('/home');
    

  };

  const backMenu = e => {
    e.preventDefault();
    history.push('/');
    setIngrid([]);
    setQuery([]);

  }

  return (
    <div className="MainForm">
      <form onSubmit={getRecipes} className="MainForm">
        <input
          pattern="[a-z]{1,15}"
          title="ingrigients should only contain English letters. e.g. rum"
          className="MainForm__input"
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value.toLowerCase())}
          placeholder="e.g. rum"
          name="query"
          autoComplete="off"
          autoFocus="on"
          required
          
        />
        <label
          className="MainForm__label"
          htmlFor="query"
        >
        </label>
        {ingrid.map(ingrid => {
          return (
            <h4 className="ingridient" >{ingrid}
              <div className="close"  onClick={() => handleRemoveClick(ingrid)} >
              </div>
            </h4>
          )
        })}
      </form>
      <div className="card-action" >
        <button
          className="btn "
          onClick={query && getRecipes}
          /* disabled */
        >
          Start mixing
           </button>
      </div>
      <button
      
        className="menu"
        onClick={backMenu}
        
      >
        menu
           </button>
    </div>
  );
};

export default MainForm;
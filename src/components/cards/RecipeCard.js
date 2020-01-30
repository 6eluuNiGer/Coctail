import React, { useContext } from 'react';
import { HistoryContext }    from '../../util/HistoryContext';
import classes from '../cards/RecipeCard.css'
const RecipeCard = props => {
  const { routerHistory } = useContext(HistoryContext);



  const goToRecipe = e => {
    const recipeId = e.target.parentElement.id;
    routerHistory.push(`/recipe#${recipeId}`);
  };

  return (
    <div className="RecipeCard" id={props.id} >
      <img onClick={goToRecipe}
        className="RecipeCard__image"
        src={props.image}
        alt=""
      />
      <h3 className="RecipeCard__title" onClick={goToRecipe}>{props.title}</h3>
      {/* <button className="RecipeCard__button" onClick={goToRecipe}>Open</button> */}
    </div>
  );
};

export default RecipeCard;
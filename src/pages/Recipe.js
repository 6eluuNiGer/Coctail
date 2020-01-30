import React, { useState, useEffect } from 'react';
import * as api                       from '../util/api';
import Spinner                        from '../util/Spinner';
import classes                        from '../pages/Recipe.css';
import { LoopCircleLoading  } from 'react-loadingg';
const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  
  useEffect(() => {
    const recipeId = window.location.hash.substr(1); //витягує хеш-значення з URL-адреси, фактично без знака #(1)
    api.getRecipes(`lookup.php?i=${recipeId}`)
    .then(res => {
      setRecipe(res.data.drinks[0]);
    })
    .catch(err => console.log(err));
  }, []);

  const ingredientsRenderer = () => {
    let ingredients = [];
    for (let ing in recipe) {
      if (ing.includes('Ingredient') && recipe[ing] && recipe[ing].length) {  // перевірканавлючність 
        let ingIndex = ing.split('strIngredient')[1]; // розбиває масив на ингридиєнти  і 
        let measure = recipe[`strMeasure${ingIndex}`];
        let ingredient = `${recipe[ing]} - ${measure}`;
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  };
  
  return (
    <React.Fragment>
      {recipe ?
        <div className="containerrr">
          <div className="Recipe__media">
            <img src={recipe.strDrinkThumb} alt=""/>
          </div>
          <div className="Recipe__ingredients">
            <h3 className="Recipe__title">{recipe.strDrink}</h3>
            {ingredientsRenderer().map((item, index) => {
              return <p key={index}>{item}</p>
            })}
          </div>
        </div> : <LoopCircleLoading color='#9307fe' size='large'  />}
        <h2>Greate you have Cocktail</h2>
    </React.Fragment>
  );
};

export default Recipe;
import React, { useState, useContext, useEffect } from 'react';
import { RecipesContext } from '../util/RecipesContext';
import * as api from '../util/api';
import RecipeCard from '../components/cards/RecipeCard';
import compact from 'lodash/compact'
import { LoopCircleLoading } from 'react-loadingg';
import classes from '../pages/Recipes.css'


const Recipes = () => {
  const { searchQuery, } = useContext(RecipesContext);
  const [recipes, setRecipes] = useState(null);
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    if (searchQuery.length) fetchRecipes();
  }, [searchQuery[0]]);

  const fetchRecipes = async () => {
    const response = await api.getRecipes(`filter.php?i=${searchQuery[0]}`);
    const data = await response.data.drinks;
    
    /* if(response ==! true){
       const error = "Ingridients false"
       return error

    } */
    

    /* setRecipes(data); */
    /* console.log(data)
   */
    if (data && data.length > 0) {
      const detailedDrinks = await Promise.all(data.map(async item => {
        console.log(item)
        const drinkDetail = await api.getRecipes(`lookup.php?i=${item.idDrink}`)
        const data = await drinkDetail.data
        return data
      }))
      console.log(detailedDrinks)
      const drinks = detailedDrinks.map(detailedDrink => {

        const formattedDrink = detailedDrink.drinks[0];

        const ingredients = compact(Object.keys(formattedDrink).map(prop => {
          if (prop.includes('strIngredient')) {
            return formattedDrink[prop] && formattedDrink[prop].toLowerCase();
          }
        }));
        /* console.log(ingredients) */
        return { ...formattedDrink, ingredients }
      });
      setRecipes(drinks)
    }
  };
  return (
    <div className="Recipes">

      {recipes ? recipes.filter(recipe => {
        /* console.log(recipe) */
        /* console.log(searchQuery) */
        return searchQuery.every(searchIngredient => recipe.ingredients.includes(searchIngredient));
      }).map((item, index) => {
        let recipeCard = null;
        if (index < 8) {
          recipeCard =
            <RecipeCard
              key={index}
              id={item.idDrink}
              title={item.strDrink}
              image={item.strDrinkThumb}
            />
        }
        return recipeCard;
      }) : 
       {/* <LoopCircleLoading color='#9307fe' size='large' /> */} && <div className='errors'>
       Enter the correct ingredient.Try again</div>} 
    </div>
  );
};

export default Recipes;

{/* <LoopCircleLoading color='#9307fe' size='large' /> 

 {<div className='errors'>
enter the correct ingredient.Try again</div> }  */}

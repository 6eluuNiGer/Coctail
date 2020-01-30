import axios from 'axios';

export const getRecipes = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
  method: 'GET'
});
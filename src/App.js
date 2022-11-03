import './App.scss';
import recipesData from "./data/recipes.json";
import recipeDetailsData from "./data/recipeDetails.json"
import { useState } from 'react';
import RecipesList from './components/RecipesList/RecipesList';
import RecipesDetails from './components/RecipesDetails/RecipesDetails';

function App() {
  const [ recipesList, setRecipesList ] = useState(recipesData)
  const [ selectedRecipe, setSelectedRecipe] = useState(recipeDetailsData[0])

  const handleSelectedRecipe = (clickedId) => {
    // 1. Find the correct recipe in our recipedetails
    const foundRecipe = recipeDetailsData.find((recipe) => clickedId === recipe.id);

    // 2. Update the selected recipe state
    setSelectedRecipe(foundRecipe);
  };

    // Filter the current selected recipe out of the array that we pass to recipes List
    const filteredRecipes = recipesList.filter((recipe) => recipe.id !== selectedRecipe.id);


  return (
    <div className="App">
      <RecipesList recipesList={filteredRecipes} handleSelectedRecipe={handleSelectedRecipe}/>
      <RecipesDetails selectedRecipe={selectedRecipe} />
    </div>
  );
}

export default App;

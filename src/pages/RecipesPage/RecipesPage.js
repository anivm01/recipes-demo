import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipes, fetchRecipeByID } from "../../utilities/api";
import RecipesList from "../../components/RecipesList/RecipesList";
import RecipesDetails from "../../components/RecipesDetails/RecipesDetails";
import Loading from "../../components/Loading/Loading";

function RecipesPage() {
    const [ recipesList, setRecipesList ] = useState([]);
    const [ selectedRecipe, setSelectedRecipe] = useState(null);
    const { recipeId } = useParams();

    //useEffect hook to handle fetching recipes list from the api
    //runs only on first page load 
      
      useEffect(() => {
        fetchRecipes()    
        .then(response => {      
            setRecipesList(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
      }, []);
  
      //useEffect hook generates recipe details from api by recipe id
      //runs after recipes list is populated 
      //also runs whenever a new recipe id route is selected
  
      useEffect (()=>{
        if (recipesList.length <=0) {
          return
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        let selectedRecipeId = recipeId || recipesList[0].id;

        fetchRecipeByID(selectedRecipeId)
        .then(response => {
            setSelectedRecipe(response.data)
        })
        .catch( (error)=> {
            console.log(error)
        })
      }, [recipeId, recipesList])

    //loading page while waiting for api response
    if (!selectedRecipe) {
        return <Loading />
    }
    
    // Filter the current selected recipe out of the array that we pass to recipes List
    const filteredRecipes = recipesList.filter((recipe) => recipe.id !== selectedRecipe.id);

    // Move the selected recipe to the front.
    const recipesListUpdated = [...recipesList]
    const selectedRecipeInList = recipesListUpdated.find((recipe)=> recipe.id === selectedRecipe.id)
    recipesListUpdated.splice(recipesListUpdated.indexOf(selectedRecipeInList), 1)
    recipesListUpdated.unshift(selectedRecipeInList)
  
    
    return (
      <div className="App">
        <RecipesList recipesList={filteredRecipes} />
        <RecipesDetails selectedRecipe={selectedRecipe} />
      </div>
    );
}

export default RecipesPage
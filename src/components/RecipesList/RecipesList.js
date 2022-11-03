import React from 'react'
import RecipesItem from '../RecipesItem/RecipesItem'

function RecipesList( { recipesList, handleSelectedRecipe } ) {
  return (
    <div className='list'>
        {recipesList.map((recipe, index)=>{
            return (<RecipesItem 
            key={index}
            title={recipe.title}
            description={recipe.description}
            imgSrc={recipe.img}
            id={recipe.id}
            handleSelectedRecipe={handleSelectedRecipe}
            />)
        })}
    </div>
  )
}

export default RecipesList
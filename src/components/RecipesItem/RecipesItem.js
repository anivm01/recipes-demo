import React from 'react'

function RecipesItem( { imgSrc, title, description, id, handleSelectedRecipe } ) {
  return (
    <div onClick={()=>{return handleSelectedRecipe(id)}} className='card'>
        <img className='card__img' src={imgSrc} alt={description} />
    </div>
  )
}

export default RecipesItem
import React from 'react'

function RecipesItem( { imgSrc, title, description, id, handleSelectedRecipe } ) {
  return (
    <div onClick={()=>{return handleSelectedRecipe(id)}} className='card'>
        <h2 className='card__title' >{title}</h2>
        <img className='card__img' src={imgSrc}/>
    </div>
  )
}

export default RecipesItem
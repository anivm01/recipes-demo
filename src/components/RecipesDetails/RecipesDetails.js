import React from 'react'

function RecipesDetails( { selectedRecipe } ) {
  return (
    <div className='details' >
        <div className='details__intro'>
            <h2 className='details__title'>{selectedRecipe.title}</h2>
            <img className='details__img' src={selectedRecipe.img} />
            <p className='details__description'>{selectedRecipe.description}</p>
        </div>
        <div className='details__instructions'>
            <h3 className='details__heading'>Ingredients</h3>    
            <ul className='details__ingredients'>
                {selectedRecipe.ingredients.map((ingredient, index)=>{
                    return (
                        <li className='details__ingredient' key={index}>{ingredient}</li>
                    )
                })}
            </ul>
            <h3 className='details__heading'>Instructions</h3>    
            <ol className='details__steps' >
                {selectedRecipe.steps.map((step, index)=>{
                    return (
                        <li className='details__step' key={index}>{step}</li>
                    )
                })}
            </ol>
        </div>
    </div>
  )
}

export default RecipesDetails
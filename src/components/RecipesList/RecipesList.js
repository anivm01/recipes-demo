import RecipesItem from '../RecipesItem/RecipesItem'

function RecipesList( { recipesList } ) {
  return (
    <div className='list'>
        {recipesList.map((recipe, index)=>{
            return (<RecipesItem 
            key={index}
            title={recipe.title}
            description={recipe.description}
            imgSrc={recipe.img}
            id={recipe.id}
            />)
        })}
    </div>
  )
}

export default RecipesList
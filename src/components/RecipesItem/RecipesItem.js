import { Link } from 'react-router-dom'

function RecipesItem( { imgSrc, title, description, id } ) {
  return (
    <Link to={`recipes/${id}`} className='card'>
        <img className='card__img' src={imgSrc} alt={description} />
    </Link>
  )
}

export default RecipesItem
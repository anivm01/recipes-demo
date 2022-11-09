import axios from "axios"

export const fetchRecipes = () => {
    return axios.get('http://recipes-demo-api.up.railway.app/recipes')
}

export const fetchRecipeByID = (id) => {
    return axios.get(`http://recipes-demo-api.up.railway.app/recipes/${id}`)
}
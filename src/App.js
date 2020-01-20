import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe'


const App =()=> {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')
//only runs when query changes
 useEffect(()=>{
  getRecepies();
},[query]);

const getRecepies = async ()=> {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`);
  const data =  await response.json();
  console.log(data.hits)
  setRecipes(data.hits);
}
// what are we search for
const updateSearch = (e)=> {
  setSearch(e.target.value);
}
// get what are we search for
const getSearch = (e)=> {
  e.preventDefault();
  //query becomes what the user has inputed
  setQuery(search)
  setSearch('')
}
  return (
   
    <div className="App">
      
    <form onSubmit = {getSearch} > 
    <div className='search-form'>
      <input type="text" placeholder='Search' className='search-bar' value={search} onChange={updateSearch}/>
      <p>OR Select Sorce</p> {/*need a unique state for option select and multiple queries*/}
      <select onClick={updateSearch} name="Sorces" id="sorces">
      <option value="Food Network">Food Network</option>
      <option value="Bon Appetit">"Bon Appetit"</option>
      </select>
       </div>
      <button type="submit" className='search-button'>SEARCH</button>
    
    </form>
    
    <div className={'recipes'}> 
      {recipes.map(recipe => <Recipe  
      title={recipe.recipe.label}
      description={recipe.recipe.description}
            ingredients={recipe.recipe.ingredientLines}
                                       calories={recipe.recipe.calories}
                                       image={recipe.recipe.image}  
                                       key={recipe.recipe.label}     />)}
    </div>
    </div>
  );
}

export default App;
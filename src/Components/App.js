import React, { Component } from 'react';
import '../Styles/App.css';
import api from '../Api/api';
import Search from './Search';
import Recipes from './Recipes';

//Basic app component that handles most of the application
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      recipes: [], //List of recipes
      loaded: false, //If the api has fetched *any* material yet. This is not updated after first fetch intentionally
    }
    this.onIngredientSubmit = this.onIngredientSubmit.bind(this);
  }

  //Method that helps to combat bug where after the first search, page would not re-render
  clearIng() {
    this.setState({recipes: []}); 
  }

  //Method that uses axios to get information from Edamam API
  onIngredientSubmit = async (ingredient) => {
    this.clearIng();
    let res = await api.get('/search', {
      params: {q: ingredient}
    });
    let data = await res.data;
    this.setState({
      recipes: data.hits,
      loaded: true,
    });
    console.log(this.state.recipes);
  };


  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>React Recipes</h1>
          <p>By: Ethan Vander Wiel</p>
        </div>

        <Search submit= {this.onIngredientSubmit} />

        {this.state.recipes.length === 0 && this.state.loaded === false ? (
          <div className="beforeLoad">
            <h3>To find new recipes, type ingredients in the search bar!</h3>
          </div>
        ) : (
          this.state.recipes.map((recipe, index) => {
            return <div key={index}><Recipes recipe={recipe.recipe}/></div>;
          })
        )
        }

      </div>
    );
  }
}

export default App;

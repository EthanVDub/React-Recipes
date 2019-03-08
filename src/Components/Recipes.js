import React, { Component } from 'react';
import '../Styles/App.css';
import '../Styles/Recipes.css';

//Component for each recipe
class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        recipe: this.props.recipe,
        health: this.props.recipe.healthLabels,
        ingred: this.props.recipe.ingredientLines,
        }
    }

    //renders the elements in the health labels array returned by the get request
    renderHealth() {
        let results = '';
        for(let i = 0; i < this.state.health.length; i++) {
            results += this.state.health[i];
            if(i < this.state.health.length - 1) {
                results += ' | ';
            }
        }
        return results;
    }

    //renders the elements in the ingredients array returned by the get request
    renderIngred() {
        let results = '';
        for(let i = 0; i < this.state.ingred.length; i++) {
            results += this.state.ingred[i];
            if(i < this.state.ingred.length - 1) {
                results += ' | ';
            }
        }
        return results;
    }

    render() {
        return(
        <div className="recipes">
            <div className="images">
                <img alt={this.state.recipe.label} src={this.state.recipe.image}></img> 
            </div>
            <div className="details">
                <h2><a href={this.state.recipe.url}>{this.state.recipe.label}</a></h2>
                <div className='health'>
                    <p><b>Calories <i>(per serving)</i> :</b> {Math.ceil(this.state.recipe.calories / this.state.recipe.yield)}</p>
                    <p><b>Yield: </b> {this.state.recipe.yield}</p>
                    <p><b>Health Labels:</b> {this.renderHealth()} <br/></p>
                    <p><b>Ingredients:</b> {this.renderIngred()}</p>
                </div>
            </div>
            
        </div>
        )
    }
  
}

export default Recipes
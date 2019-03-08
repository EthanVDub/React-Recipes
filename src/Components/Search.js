import React, { Component } from 'react';
import '../Styles/App.css';

//Component for the user input field of search
class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredient: ''
    }
}
    //Changes state as input is changed.
    onInputChange = e => {
      this.setState({ ingredient: e.target.value });
    };
  
    //Once form is submitted (press ENTER), calls App.js component function
    onFormSubmit = e => {
      e.preventDefault();
      this.props.submit(this.state.ingredient);
    };

    render() {
      return (
        <div className="recipeList">
          <form className='ui form' onSubmit={this.onFormSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-search"></i></span>
              </div>

              <input
                onChange={this.onInputChange}
                value={this.state.ingredient}
                type='text'
                className='centerInput'
                placeholder='Ingredients...   e.g. bread, sugar, butter'
              />

              <div className="input-group-append">
                  <div className="edamam" id="edamam-badge"></div>
              </div>

            </div>
          </form>

        </div>
        );
    }
}
export default Search
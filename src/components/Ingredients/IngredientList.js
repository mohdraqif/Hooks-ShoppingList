import React from 'react';

import './IngredientList.css';

const IngredientList = props => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map(ig => (
          <li key={ig.id}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
            <i className="fa fa-trash" id="delete" aria-hidden="true" onClick={props.onRemoveItem.bind(this, ig.id)}/>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;

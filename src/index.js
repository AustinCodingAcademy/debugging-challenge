import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';


function addItemToCart(id){
  state.numberOfItemsInCart += 1;
  state.cart.push(id)
  render();
}

function render(){

  ReactDOM.render(
    <App 
    addItemToCart={addItemToCart}
    state={state} />,
    document.getElementById('root')
  );
}
render();









































































































































































































































let temp = console.log;
console.log = function(){
  temp("no cheating");
}












import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import STORE from './store.js';

function App(){

  //look through STORE.lists to get a list (object)
  //in the list get the array of cardIds
  //this.allCards to display the card objects with matching cardIds


function getCardId(cardIds){
  let cards = cardIds.map(id => STORE.allCards[id]);
  return cards;
}

const lists = STORE.lists.map((list)=> <List key={list.id} header={list.header} cards={getCardId(list.cardIds)}/>);
return (
<div class='App'>
    <header className="App-header">
    <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {lists}
      </div>
  </div>
  )
}

export default App;

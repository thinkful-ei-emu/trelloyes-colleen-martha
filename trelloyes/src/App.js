import React from 'react';
import './App.css';
import List from './List.js';

function App(props){

  //look through STORE.lists to get a list (object)
  //in the list get the array of cardIds
  //this.allCards to display the card objects with matching cardIds


function getCardId(cardIds){
  let cards = cardIds.map(id => props.store.allCards[id]);
  return cards;
}

const lists = props.store.lists.map((list)=> <List key={list.id} header={list.header} cards={getCardId(list.cardIds)}/>);
return (
<div className='App'>
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

import React from 'react';
import BookmarkList from './BookmarkList';
import './App.css';

//App
//searching for parameters
//container for results
//results themselves

function App() {
  return (
    <div className="main-div">
      <form class="main-form">
        <label for="search-input">Search</label>
        <input id="search-input" type="text"></input>
      </form>
      <div class="results" id="results">
        <BookmarkList />
        </div>
    </div>

  );
}

export default App;

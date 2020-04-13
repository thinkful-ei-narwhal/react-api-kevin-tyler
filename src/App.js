import React from 'react';
import SearchAndFilter from './components/SearchAndFilter';
import BookList from './components/BookList';
import './App.css';

//App
//searching for parameters
//container for results
//results themselves

class App extends React.Component {
  state = {
    items: []
  }

  fetchBooks = (e, formInput, dropState) => {
    e.preventDefault();
    const url = 'https://www.googleapis.com/books/v1/volumes?q='
    const search = formInput;
    let filter = '';
    if (dropState === null) {
      filter = ''
    } else {
      filter = `&filter=${dropState}`
    }
    fetch(url+search+filter)
        .then(res => res.json())
        .then(results => this.setState({ items: results.items }));
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="app">
        <header>Books</header>
        <main>
          <SearchAndFilter 
            fetchBooks = {this.fetchBooks}
          />
          <BookList 
            state = {this.state}
          />
        </main>
      </div>
    )
  }

}

export default App;

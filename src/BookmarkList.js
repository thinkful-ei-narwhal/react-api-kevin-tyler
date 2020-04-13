import React from 'react';


export default class BookmarkList extends React.Component {
    state = {
        results: {
            items: []
        }
    }

    fetchBooks = () => {
        const url = 'https://www.googleapis.com/books/v1/volumes?q='
        const search = ''
        fetch(url+search)
        .then(res => res.json())
        .then(results => this.setState({ results }));
    }

    render() {
        const list = this.state.results.items.map(e => <li>{e.volumeInfo.title}</li>)
        
        return(
        <div>
            <ul>{list}</ul>
            <button onClick={this.fetchBooks}>Search</button>
        </div>
        )
    }
}


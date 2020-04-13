import React from 'react';


export default class SearchAndFilter extends React.Component {
    state = {
        formInput: ''
    }

    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            formInput: e.target.value
        })
        
    }

    render() {
       return (
        <form class="main-form" onSubmit={(e) => this.props.fetchBooks(e, this.state.formInput)}>
            <label for="search-input">Search</label>
            <input id="search-input" type="text" onChange={(e) => this.handleInput(e)}></input>
            <button type='submit' >Search</button>
        </form>
       )
    }
}
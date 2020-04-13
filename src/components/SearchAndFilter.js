import React from 'react';


export default class SearchAndFilter extends React.Component {
    state = {
        formInput: '',
        dropState: null
    }

    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            formInput: e.target.value
        })
        
    }

    handleDrop = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            dropState: e.target.value
        })
        
    }

    render() {
       return (
        <form class="main-form" onSubmit={(e) => this.props.fetchBooks(e, this.state.formInput, this.state.dropState)}>
            <label for="search-input">Search</label>
            <input id="search-input" type="text" onChange={(e) => this.handleInput(e)} required></input>
            <select value={this.state.dropState} onChange={(e) => this.handleDrop(e)} class='searchlist'>
                <option value="null">No Filter</option>
                <option value="ebooks">ebooks</option>
                <option value="free-ebooks">Free ebooks</option>
                <option value="full">Full</option>
                <option value="paid-ebooks">Paid ebooks</option>
                <option value="partial">Partial</option>
            </select>
            <button type='submit' >Search</button>
        </form>
       )
    }
}
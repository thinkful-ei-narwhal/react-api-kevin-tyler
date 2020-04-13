import React, { Components } from 'react';
import BookResults from './BookResults'

class BookList extends React.Component{
  render() {

  
    return(
      <div>
          <ul>
            {this.props.state.items.map(item => 
              <BookResults
                item = {item}
              />
            )}
          </ul>
      </div>
    )
  }
}

export default BookList;

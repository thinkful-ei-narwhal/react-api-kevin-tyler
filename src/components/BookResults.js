import React, { Components } from 'react';

export default class BookResults extends React.Component {
  
  expandBook = (e) => {
    e.preventDefault();
    const parent = e.target.parentElement;
    for (let i = 0; i < parent.childNodes.length; i++) {
      if (parent.childNodes[i].className === 'hidden') {
        parent.childNodes[i].classList.remove('hidden')
        parent.childNodes[i].classList.add('unhidden');
      } else
      if (parent.childNodes[i].className === 'unhidden') {
        parent.childNodes[i].classList.remove('unhidden')
        parent.childNodes[i].classList.add('hidden')
      }
    }
  }
  
  render() {
    let authors = '';
    let price = '';
    let description = '';
    
    if (!this.props.item.volumeInfo.authors) {
      authors = 'No author listed';
    } else {
      authors = this.props.item.volumeInfo.authors.toString();
    }

    if (!this.props.item.saleInfo.retailPrice) {
      price = 'No Price Listed';
    } else {
      price = this.props.item.saleInfo.retailPrice.amount.toString();
    }

    if (!this.props.item.volumeInfo.description) {
      description = 'No Description';
    } else {
      description = this.props.item.volumeInfo.description
    }

    console.log();
    return (
      <li>
        <h3>Title: {this.props.item.volumeInfo.title}</h3>
        <p>Author: {authors}</p>
        <p>Price: {price}</p>
        <p className="hidden">Description: {description}</p>
        <button type="button" id="expand-btn" onClick={(e) => this.expandBook(e)}>Expand</button>
      </li>
    )
  }
}
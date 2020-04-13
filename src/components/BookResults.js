import React, { Components } from 'react';

export default class BookResults extends React.Component {
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
        <p>Description: {description}</p>
      </li>
    )
  }
}
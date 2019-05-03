import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product.js';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShareForm from './ShareForm.js';

export default class Wishlist extends Component {
  constructor(props){
    super(props)
    this.state ={
      products:[],
      showShareForm: false
    }
  }
  componentDidMount(){
    axios.get(`/api/wishlists/${this.props.wishlist.id}`)
    .then((res) => {
      this.setState({
        products: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
}

  editWishlistName = () => {
    this.props.onEdit(this.props.wishlist.id)
  }

  deleteWishlist = () => {
    this.props.onDelete(this.props.wishlist.id)
  }

  toggleShare = () => {
    this.setState({
      showShareForm: !this.state.showShareForm
    })
  }

  render() {
    return (
      <div className="wishlist" >
        <span className="shareButton" onClick={this.toggleShare}>
          Share
        </span>
        {this.state.showShareForm ?  <ShareForm wishlist={this.props.wishlist}/> : null} 

        <span className="deleteButton" onClick={this.deleteWishlist}>
          X
        </span>
        <h1 onClick={this.editWishlistName}> {this.props.wishlist.name}</h1>
        {this.state.products.map(product => (
          <Product product={product} key = {product.id}/>
          
        ))}
      </div>
    );
  }
}
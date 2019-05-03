import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './Navbar'
import App from './App'
import BigWishlist from "./BigWishlist"
import BigProduct from './BigProduct'
import jwtDecode from 'jwt-decode';

class AppRouter extends Component {
  constructor(props){
    super(props)
    this.state = {
      wishlists:[],
      products:[],
      currentWishlistId: null,
      notification: false,
      visible: true,
      currentUserId: localStorage.getItem("jwt") ? jwtDecode(localStorage.getItem("jwt")).sub : null,
      currentUserName: localStorage.getItem("jwt") ? jwtDecode(localStorage.getItem("jwt")).name : null,
      currentUserEmail: null
    }
  }
  render(){
    return (
      <Router>
        <div>
        <div className="navbar">
            <Link to="/"><h1>latercart</h1></Link>
            <Link to="/wishlists/1">Wishlists</Link>
            <Link to="/products/2">Products</Link>
            <h3>{this.state.currentUserName}</h3>                
        </div>
          <Route path="/" exact render={(props)=> <App /> } />
          <Route path="/wishlists/:id" render={(props) => <BigWishlist {...props}/>} />
          <Route path="/products/:id" render={(props) => <BigProduct {...props} />} />
        </div>
      </Router>
    );
  }
  
}

export default AppRouter;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './BasicRouter';
import * as serviceWorker from './serviceWorker';
// import BigProduct from './BigProduct';
// import Wishlist from './Wishlist'
// import BigWishlist from './BigWishlist'

function getIndex (pathname){
  let index = pathname.split("/")
  return (index[2])
}

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

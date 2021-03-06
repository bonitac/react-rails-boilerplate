import React, { Component } from 'react'
import axios from 'axios';
// import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    width:'80%',
    margin: 'auto',
    minWidth: 200,
    'text-align':'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});


class ProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:this.props.product.id,
      name: this.props.product.name,
      img_url: this.props.product.img_url,
      price: this.props.product.price,
      rating: this.props.product.rating,
      note: this.props.product.note,
      wishlist_id: this.props.product.wishlist_id,
      url: this.props.product.url,
      toggle: true
    }
  }

  onChange = (e) =>{
    e.preventDefault()
    this.setState({[e.target.id]: e.target.value})
  }

  editProduct = (e) => {
    e.preventDefault()
    axios.put(`/api/products/${this.state.id}`, {product:this.state})
    .then(window.location.reload())
  }

  render() {
    const {id, name, img_url, price, rating, note,url} = this.state
    return (
      <div className="product" >
      <Card>
        <CardContent>
        <form className="product-edit-form">
          <TextField className='input-name' label="Product name: " placeholder= {name} id="name" onChange={this.onChange} />
          <br/>
          <img className="bigproduct-img" src={img_url} alt={name} />
          <br/>
          <TextField className='input-img' label="Image URL: " placeholder = {img_url} id="img_url" onChange={this.onChange} />
          <br/>
          <TextField className='input-price' label="Price: " placeholder= {price} id="price" onChange={this.onChange} />
          <br/>
          <TextField className='input-notes' label="Note: " placeholder= {note} id="note" onChange={this.onChange} />
          <br/>
          <TextField className='input-rating' label="Rating: " placeholder= {rating} id="rating" onChange={this.onChange} />
          <br/>
          <TextField className='input-url' label="URL: " placeholder= {url} id="url" onChange={this.onChange} />
          <br/>
          <br/>
          <Button variant="contained" className="editBtn" id={id} onClick={this.editProduct} style={{backgroundColor: "#E1B8B1"}}>
          Submit
          </Button>
        </form>
        </CardContent>
      </Card>
      </div>
    );
  }
}

// export default ProductForm
export default withTheme()(withStyles(styles)(ProductForm))
import React, { Component } from "react";
import {connect} from "react-redux";
import {updateProduct} from "../actions";
import {Redirect} from "react-router-dom";

class ProductEdit extends Component {
  constructor(props) {
    super(props);

    const { product } = this.props.location.state;

    this.state = {
      productName: product.productName !== undefined ? product.productName : "",
      price: product.price !== undefined ? product.price : "",
      type: product.type !== undefined ? product.type : "",
      id: product.id !== undefined ? product.id : "",
      refresh : false,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleChangeName(e) {
    e.preventDefault();
    this.setState({
      productName : e.target.value
    });
  }
  handleChangePrice(e) {
    e.preventDefault();
    this.setState({
      price : e.target.value
    });
  }
  handleChangeType(e) {
    e.preventDefault();
    this.setState({
      type : e.target.value
    });
  }

  handleEdit = (e) => {
       this.props.updateProduct(this.state);
    //    return (<Redirect to="/products" />);
  } 

  handleSubmit =(e) => {
      e.preventDefault();
      this.setState({
           refresh: true
       });
      
  }

  render() {
    const { product } = this.props.location.state;

    if(this.state.refresh){
        return (<Redirect to="/products" />);
    }
    else{
        if (product !== undefined) {
            return (
                <div className="container" >
                <h3>Edit Products</h3>
                <form onSubmit = {this.handleSubmit.bind(this)}>
                    <div className="row">
                    <input
                        placeholder="Product Name"
                        id="productName"
                        type="text"
                        name="productName"
                        value={this.state.productName}
                        onChange={this.handleChangeName}
                    />
                    </div>
                    <div className="row">
                    <input
                        placeholder="Price"
                        id="price"
                        type="text"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChangePrice}
                    />
                    </div>
                    <div className="row">
                    <input
                        placeholder="Type"
                        id="type"
                        type="text"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleChangeType}
                    />
                    </div>
                    <div className="row" className="displayNone">
                    <input
                    disabled 
                        placeholder="ID"
                        id="ID"
                        type="text"
                        name="type"
                        value={this.state.id}
                    />
                    </div>
                    <div className="row">
                    <button
                        type="submit"
                        className="waves-effect waves-light btn right-align"
                        onClick = {this.handleEdit}
                    >
                        Add
                    </button>
                    </div>
                </form>
                </div>
            );
            } else {
            return <h3>No Item</h3>;
            }
    }
  }
}

const mapDispatchToProps = dispatch => {
    return{
        updateProduct: (product) => dispatch(updateProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(ProductEdit);

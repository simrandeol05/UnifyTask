import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addProduct} from '../actions'; 

class ProductAdd extends Component{

    constructor(props){
        super(props);
    }
        
    state = {
        productName: '', 
        price:'',
        type:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state);
    }

    render()
    {
    return(
       <div className="container">
        <h3>Add Products</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="row">
                    <input
                      placeholder="Product Name"
                      id="productName"
                      type="text"
                      name="productName"
                      value={this.state.productName}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row">
                    <input
                      placeholder="Price"
                      id="price"
                      type="text"
                      name="price"
                      value={this.state.price}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row">
                    <input
                      placeholder="Type"
                      id="type"
                      type="text"
                      name="type"
                      value={this.state.type}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row">
                    <input type="text" name="id" value={this.state.id} />
                  </div>
                  <div className="row">
                    <button
                      type="submit"
                      className="waves-effect waves-light btn right-align"
                    >
                    Add  
                    </button>
                  </div>
            </form>
       </div>
     );
    }   
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (product) => dispatch(addProduct(product)),
    };
};


export default connect(null,mapDispatchToProps)(ProductAdd);
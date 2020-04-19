import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteProduct } from "../actions";

import axios from "axios";

class ProductList extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const apiUrl = "http://localhost:8000/products";
    axios
      .get(apiUrl)
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            products: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  render(){
    
    const {products} = (this.props.products.products !== undefined && this.props.products.length > 0) ? this.props.products : this.props;
    

    if( products.length > 0 ){
      console.log(this.props.products);
      return(

        <div>
          <table className="striped tableClass">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="stripped">
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.productName}</td>
                  <td>{product.price}</td>
                  <td>{product.type}</td>
                  <td>
                    <button className="waves-effect waves-light btn-small">
                      <i className="material-icons">create</i>
                    </button>
                  </td>
                  <td>
                    <button className="waves-effect waves-light btn-small"
                    onClick = {() => this.props.deleteProduct(product.id)}
                    >
                      <i className="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      );
    }
    else{
      return (<div>Kindly refresh the page</div>)
    }
  }
}

const mapStateToProps = (state) => ({ products:state.products});
 
const mapDispatchToProps = dispatch => {
  return{
    deleteProduct: (id) => dispatch(deleteProduct(id))
  };
   
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);

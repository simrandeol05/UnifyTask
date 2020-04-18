import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ProductList extends Component{

  render(){

    const {products} = this.props;

    if(products.length){
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
                    <button className="waves-effect waves-light btn-small">
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
      return (<div>No Products</div>)
    }
  }
}

const mapStateToProps = (state) => ({ products:state.products});
 

export default connect(mapStateToProps)(ProductList);

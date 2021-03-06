import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../actions";
import ProductEdit from "./ProductEdit";
import axios from "axios";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      isEdit: false,
      term: "",
      showSearch: false,
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
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

  //To pass products in Edit Component
  editClick = (product) => {
    this.props.history.push({
      pathname: `/products/${product.id}/edit`,
      state: {
        product: product,
      },
    });
  };

  searchHandler(e){
    this.setState({
      term: e.target.value,
      showSearch : true,
    });
  }

  searchingFor = (term) => {
    return function(x){
      return x.productName.toLowerCase().includes(term.toLowerCase()) || !term;
    }
  }

  render() {
    console.log(this.props.products);

    const { products } = this.props;

    if (products.length > 0) {
      return (

        <div className="container">

         <div className="searchBox">
         <form>
          <input className="searchBox" placeholder="Search" type="text" 
            onChange={this.searchHandler}
          />
         </form>
         </div>


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
              {products.filter(this.searchingFor(this.state.term)).map((product) => (
                <tr key={product.id}>
                  <td>{product.productName}</td>
                  <td>{product.price}</td>
                  <td>{product.type}</td>
                  <td>
                    <button
                      className="waves-effect waves-light btn-small"
                      onClick={() => this.editClick(product)}
                    >
                      <i className="material-icons">create</i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="waves-effect waves-light btn-small"
                      onClick={() =>
                        this.props.deleteProduct(product.id, products)
                      }
                    >
                      <i className="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {this.state.isEdit ? (
              <ProductEdit product={this.state.product} />
            ) : null}
          </div>
        </div>
      );
    } else {
      return <div>Kindly, refresh the page</div>
    }
  }
}

const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id, products) => dispatch(deleteProduct(id, products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

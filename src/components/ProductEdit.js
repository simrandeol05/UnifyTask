import React, {Component} from 'react';

class ProductEdit extends Component {

    constructor(props){
        super(props);

        const {product} = this.props;

        this.state = {
            productName: product.productName !== undefined ? product.productName : "" ,
            price: product.price !== undefined ? product.price : "",
            type: product.type !== undefined ? product.type : "",
            model_open: true,
            
        }
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
        [name]: value,
        });
    }

    handleSubmit(e){

    }

    render(){
        const {product} = this.props;
        
        if(product !== undefined){
        
            return(

            <div className="container">
            <h3>Edit Products</h3>
            <form>
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
        else{
            return (<h3>No Item</h3>);
        }
    }

       
    
}

export default ProductEdit;
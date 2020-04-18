import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import ProductAdd from './components/ProductAdd';
import ProductEdit from './components/ProductEdit';
import ProductList from './components/ProductList';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
         <Switch>
        <Route exact path ="/products" component={ProductList} />
        <Route exact path ="/products/new" component={ProductAdd} />
        <Route exact path ="/products/:id/edit" component={ProductEdit} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

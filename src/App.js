import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import ProductAdd from './components/ProductAdd';
import ProductEdit from './components/ProductEdit';
import ProductList from './components/ProductList';
import Navbar from "./components/Navbar";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App backgroundImg">
        <Navbar />
         <Switch>
         <Route exact path ="/" component={ProductList} />
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

import React from 'react';
import { Route, Switch } from 'react-router-dom';
// pages
import DefaultLayouts from './components/layout/default-layouts'
import Products from './components/products';
import ProductDetail from './components/detail';
import AddProduct from './components/add-product';

class App extends React.Component {
  render() {
    return (
      <DefaultLayouts>
        <Switch>
          <Route path="/" component={Products} exact />
          <Route path="/detail/:id" component={ProductDetail} exact />
          <Route path="/add" component={AddProduct} exact />
        </Switch>
      </DefaultLayouts>
    );
  }
}


export default App;

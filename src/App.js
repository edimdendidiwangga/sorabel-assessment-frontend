import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// pages
import DefaultLayouts from './components/layout/default-layouts'
import Products from './pages/products';
import ProductDetail from './pages/detail';
import AddProduct from './pages/add-product';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <DefaultLayouts>
          <Switch>
            <Route path="/" component={Products} exact />
            <Route path="/detail/:id" component={ProductDetail} exact />
            <Route path="/add" component={AddProduct} exact />
          </Switch>
        </DefaultLayouts>
      </BrowserRouter>
    );
  }
}


export default App;

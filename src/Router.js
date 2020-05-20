import React from "react";

import { Switch, Route, Router } from "react-router-dom";
import Header from "./components/Header";

import Products from "./pages/products/Products";
import ProductCreate from "./pages/products/ProductCreate";
import history from "./history";
import ProductUpdate from "./pages/products/ProductUpdate";
import ProductDelete from "./pages/products/ProductDelete";

const Routers = () => {
    return (
        <Router history={history}>
            <Header />
            <Switch>
                <Route exact path="/" component={Products} />
                <Route exact path="/products" component={Products} />

                <Route
                    exact
                    path="/products/create"
                    component={ProductCreate}
                />
                <Route exact path="/products/:id" component={ProductUpdate} />
                <Route
                    exact
                    path="/products/delete/:id"
                    component={ProductDelete}
                />
            </Switch>
        </Router>
    );
};

export default Routers;

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" render={() => (<Home />)} />
          <Route path="/about" exact render={() => (<About />)} />
          <Route path="/services" render={() => (<Services />)} />
          <Route path="/products" render={() => (<Products />)} />
          <Route path="/signup" render={() => (<SignUp />)} />
          
      
        </Switch>
      </Router>
    </>
  );
}

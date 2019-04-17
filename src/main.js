import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './App';
import Blogs from './blogs/blogs';

const Main = () => (
  <main>
    <Router>
      <Route exact path='/' component={Home}/>
      <Route path='/blogs' component={Blogs}/>
    </Router>
  </main>
)

export default Main

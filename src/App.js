import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
                <ToastContainer position={toast.POSITION.TOP_RIGHT}/>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;

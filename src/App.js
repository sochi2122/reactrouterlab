

import React from "react"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import Stocks from "./pages/Stocks"
import Main from "./pages/Main"
import Prices from "./pages/Prices"
import Nav from "./components/Nav"


function App() {
  return (
    <div className="App">
    
    <Nav />
    
    <Switch>

<Route path="/"> <Main /> </Route>

<Route path="/stocks">
  <Stocks />

</Route>


    <Route path="/prices/:symbol"
    render={(routerProps) => <Prices {...routerProps} />} />
          
          </Switch>
  
    </div>
  );
}

export default App;

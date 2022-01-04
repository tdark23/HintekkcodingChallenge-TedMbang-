import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Routes from './components/Routes';
import Stops from './components/Stops';
import Directions from './components/Directions';
import Depart from './components/Depart';


function App() {
  const [road, setRoad] = useState({ route: "", stops: "", directions: "" });

  const addRoute = (route) => {
    setRoad({ ...road, route })
    console.log(road)
  }
  
  const addStop = (stop) => {
    setRoad({ ...road, stops: stop });
    console.log(road)
  }

  const addDirection = (direction) => {
    setRoad({ ...road, directions: direction });
    console.log(road)
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/routes">
          <Routes addRoute={addRoute} road={road} />
        </Route>

        <Route path="/stops">
          <Stops addStop={addStop} road={road} />
        </Route>

        <Route path="/direction">
          <Directions addDirection={addDirection} road={road} />
        </Route>

        <Route path="/depart">
          <Depart road={road} />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
        
      </Switch>
    </>
  );
}

export default App;
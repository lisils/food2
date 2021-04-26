import React from 'react';
import './App.css';
import Main from './components/main/Main';
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from './components/main/HomePage';
import Register from "./components/register/Register";
import RestaurantInfoGeneral from "./components/main/RestaurantInfoGeneral";
function App() {
  return (

      <BrowserRouter>
        <Route path="/" exact={true}>
          <div className={"App"}>
            <HomePage></HomePage>
          </div>
        </Route>

          <Route path="/home" exact={true}>
              <div className={"App"}>
                  <HomePage></HomePage>
              </div>
          </Route>

        <Route path="/login" exact={true}>
          <div className={"App"}>
            <Main></Main>
          </div>
        </Route>

          <Route path="/register" exact={true}>
              <div className={"App"}>
                  <Register/>
              </div>
          </Route>

          <Route path="/restaurants/:id" exact={true} >
              <div className={"App"}>
                  <RestaurantInfoGeneral></RestaurantInfoGeneral>
              </div>
          </Route>

      </BrowserRouter>
  );
}

export default App;

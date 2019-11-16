import React from 'react';
import { Route } from "react-router-dom";

import Register from "../components/register.js";
import Login from "../components/login.js";


function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <div styles={{margin: "0 auto", border: "5px solid black"}}>
        <Route exact path='/register' render={() => <Register />} />
        <Route exact path='/login' render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;

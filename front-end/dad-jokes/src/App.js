import React from 'react';
import { Route } from "react-router-dom";


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

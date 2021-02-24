import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import Field from "./Component/Field";

function App() {
  return (
    <div>
      <header>
        <h1>Memory Game</h1>
      </header>

      <main>
        <div className='board'>
          <Field />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

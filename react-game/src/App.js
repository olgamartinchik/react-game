import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Field from "./Component/Field";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
// import { Button } from "bootstrap";

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <div className='container'>
          <div className='board bg-dark'>
            <Button className='btn-game' variant='secondary'>
              <img
                width='25'
                src='https://cdn.iconscout.com/icon/premium/png-256-thumb/expand-2520895-2115146.png'
                alt='icon button'
              />
            </Button>
            <Field />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

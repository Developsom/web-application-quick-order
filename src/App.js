import './App.css';
import Product from "./components/Product";
import Logo from "./assets/Logo.png";
import React, { useState } from 'react';
import IncrementAndDecrement from "./components/IncrementAndDecrement";




function App() {


  return (
      <>
          <h1>Menu</h1>
        <main>
                <Product
                    productComment={'New'}
                    img={Logo}
                    title={'Oreo Cookiez'}
                    >
                </Product>
         </main>
      </>
  );
}

export default App;

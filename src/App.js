import './App.css';
import Product from "./components/Product";
import Logo from "./assets/Logo.png";
import React, { useState } from 'react';




function App() {
    const [quantity, setQuantity] = useState(0);

  return (
      <>
          <h1>Menu</h1>
        <main>
            <button
                type="button"
                disabled={quantity === 0}
                onClick={() => setQuantity(quantity - 1)}>
                -
            </button>
                <Product
                    productComment={'New'}
                    img={Logo}
                    title={'Oreo Cookiez'}
                    quantity={quantity}
                    price={quantity * 500}
                    >
                </Product>
            <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}>
                +
            </button>
         </main>
      </>
  );
}

export default App;

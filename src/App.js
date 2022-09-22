import './App.css';
import Product from "./components/Product";
import Logo from "./assets/Logo.png";

function App() {
  return (
      <>
          <h1>Menu</h1>
          <nav>
          </nav>
        <main>
                <Product
                    productComment={'New'}
                    img={Logo}
                    title={'Oreo Cookiez'}
                    productQuantity={1}
                    productPrice={500}
                >
                </Product>
        </main>

          <footer>

          </footer>
      </>

  );
}

export default App;

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
                    productComment={'Best seller'}
                    img={Logo}
                    title={'Oreo Cookiez'}
                    productPrice={'500 THB'}
                >
                </Product>
                <Product
                    productComment={'Up'}
                    img={Logo}
                    title={'Oreo Cookiez'}
                    productPrice={'500 THB'}
                >
                </Product>
                <Product
                    productComment={'Up'}
                    img={Logo}
                    title={'Oreo Cookiez'}
                    productPrice={'500 THB'}
                >
                </Product>
                <Product
                    productComment={'Up'}
                    img={Logo}
                    title={'Oreo Cookiez'}
                    productPrice={'500 THB'}
                >
                </Product>
                <Product
                    productComment={'Up'}
                    img={Logo}
                    title={'Oreo Cookiez'}
                    productPrice={'500 THB'}
                >
                </Product>
                <Product
                    productComment={'New'}
                    img={Logo}
                    title={'Oreo Cookiez'}
                    productPrice={'500 THB'}
                >
                </Product>
        </main>

          <footer>

          </footer>
      </>

  );
}

export default App;

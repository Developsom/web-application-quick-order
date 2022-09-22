import './App.css';
import Product from "./components/Product";
import Logo from "./assets/Logo.jpg";

function App() {
  return (
      <>
        <main>
            <nav>
             <Product
                productComment={'Best seller'}
                img={Logo}
                title={'Oreo Cookiez'}
                productPrice={'500 THB'}
                >
            </Product>
            </nav>
        </main>

          <footer>

          </footer>
      </>

  );
}

export default App;

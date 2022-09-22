import logo from './logo.svg';
import './App.css';
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
        <main>
             <Product
                productComment={'Best seller'}
                img={}
                title={'Oreo Cookiez'}
                productPrice={'500 THB'}
      >
            </Product>
        </main>
    </div>
  );
}

export default App;

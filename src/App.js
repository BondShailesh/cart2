import './App.css';
import Home from './page/Home';
import { Routes , Route} from "react-router-dom"
import Products from './page/Products';
import Product from './page/Product';
import Navbar from './components/Navbar';
import Error from './page/Error';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/products' element={<Products/>}>Home</Route>
      <Route path='/products/:id' element={<Product/>}>Home</Route>
      <Route path='*' element={<Error/>}>Home</Route>
    </Routes>
    </div>
  );
}

export default App;

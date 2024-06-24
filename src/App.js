import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NAv from './components/Navbar/NAv';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
function App() {
  return (
    <div className="App">
    <Router>
    <NAv/>
      <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element= {<About/>}/>
      <Route path="/products" element= {<Product/>}/>
      <Route path="/contact" element= {<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
        </div>
  );
}

export default App;

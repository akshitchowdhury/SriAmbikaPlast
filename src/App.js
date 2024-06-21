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
function App() {
  return (
    <div className="App">
    <Router>
    <NAv/>
      <Routes>
      <Route path="/" element= {<About/>}/>
      <Route path="/contact" element= {<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
        </div>
  );
}

export default App;

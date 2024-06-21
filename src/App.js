import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element= {<About/>}/>
      </Routes>
      <Footer/>
    </Router>
        </div>
  );
}

export default App;

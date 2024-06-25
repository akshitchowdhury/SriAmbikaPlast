import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NAv from './components/Navbar/NAv';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import productsData from './components/Product/productData';
import FlexSuction from './components/Product/ProductStack/FlexSuction';
import SuperFlexSuction from './components/Product/ProductStack/SuperFlexSuction';
import TopLonBraided from './components/Product/ProductStack/TopLonBraided';
import GoodLonBraided from './components/Product/ProductStack/GoodLonBraided';



function App() {
  return (
    <div className="App">
      <Router>
        <NAv />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          {/* {productsData.map(category =>
            category.subproducts.map(subproduct => {
              const { ProductName } = subproduct.product;
              const productPath = ProductName.toLowerCase().replace(/\s+/g, '-');
              return (
                <>
                <Route
                  key={ProductName}
                  path={`/${productPath}`}
                  element={<FlexSuction/>}
                />
                
                </>
              );
            })
          )} */}
          <Route path='/flex-suction' element={<FlexSuction/>}/>
          <Route path='/super-flex-suction' element={<SuperFlexSuction/>}/>
          <Route path='/top-lon-braided' element={<TopLonBraided/>}/>
          <Route path='/good-lon-braided' element={<GoodLonBraided/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

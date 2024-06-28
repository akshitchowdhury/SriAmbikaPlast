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
import FiftyFifty from './components/Product/ProductStack/FifityFifty';
import ColorTransparent from './components/Product/ProductStack/ColorTransparent';
import ColorZebra from './components/Product/ProductStack/ColorZebra';
import Opek from './components/Product/ProductStack/Opek';
import WhiteTT from './components/Product/ProductStack/WhiteTT';
import Metallic from './components/Product/ProductStack/Metallic';
import BlackZebra from './components/Product/ProductStack/BlackZebra';
import DoubleDecker from './components/Product/ProductStack/DoubleDecker';
import SuperFoam from './components/Product/ProductStack/SuperFoam';
import SuperLineRib from './components/Product/ProductStack/SuperLineRib';
import LevelTube from './components/Product/ProductStack/LevelTube';
import ColorLDPipes from './components/Product/ProductStack/LD HOse Tube/ColorLDPipes';
import WhiteTransparent from './components/Product/ProductStack/LD HOse Tube/WhiteTransparent';
import PtmtSinkPipes from './components/Product/ProductStack/PTMT/PtmtSinkPipes';
import SinkBasinPipes from './components/Product/ProductStack/PTMT/SinkBasinPipes';
import PlainBlack from './components/Product/ProductStack/PlainBlack';



function App() {
  return (
    <div className="App overflow-clip">
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
          <Route path='/good-lon-braided' element={<GoodLonBraided/>}/>
          <Route path='/fifty-fifty-(50-50)' element={<FiftyFifty/>}/>
          <Route path='/color-transparent-(c.t.t)' element={<ColorTransparent/>}/>
          <Route path='/color-zebra' element={<ColorZebra/>}/>
          <Route path='/opek' element={<Opek/>}/>
          <Route path="/white-t.t" element={<WhiteTT />} />
          <Route path="/metallic" element={<Metallic />} />
          <Route path="/black-zebra" element={<BlackZebra />} />
          <Route path="/plain-black" element={<PlainBlack/>} />
          <Route path="/double-decker" element={<DoubleDecker/>} />
          <Route path="/super-foam" element={<SuperFoam/>} />
          <Route path="/super-32-line-rib" element={<SuperLineRib/>} />
          <Route path="/level-tube" element={<LevelTube/>} />
          <Route path="/color-l.d.-pipes" element={<ColorLDPipes/>} />
          <Route path="/white-transparent" element={<WhiteTransparent/>} />
          <Route path="/ptmt-connection-pipes" element={<PtmtSinkPipes/>} />
          <Route path="/sink/basin-pipes" element={<SinkBasinPipes/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

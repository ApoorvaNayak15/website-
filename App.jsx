
import { Route,Routes } from 'react-router-dom';
import './App.css'
import Navbar from './navbar/Navbar';

import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Footer from './Footer/Footer';


function App() {
  return (
   <div>
   
    <Navbar/>
   
    <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/mens" element={<ShopCategory category="mens" />} />
                    <Route path="/womens" element={<ShopCategory category="womens" />} />
                    <Route path="/kids" element={<ShopCategory category="kids" />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:productid" element={<Product />} />

    </Routes>      
   <Footer/>


    </div>
  )
}
export default App

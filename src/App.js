import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

import SignUpModal from './components/SignUpModal';
import ShopByCategory from './Pages/ShopByCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='shop' element={<Home/>}></Route>
          <Route path='/men' element={<ShopByCategory category="MEN" />}/>
          <Route path='/men/:subcategory' element={<ShopByCategory category="MEN" />} />
          <Route path='/women' element={<ShopByCategory category="WOMEN" />} />
          <Route path='/women/:subcategory' element={<ShopByCategory category="WOMEN" />} />
          <Route path='/kids' element={<ShopByCategory category="KIDS" />} />
          <Route path='/kids/:subcategory' element={<ShopByCategory category="KIDS" />} />
          <Route path='/homeandliving' element={<ShopByCategory category="HomeAndLiving" />} />
          <Route path='/homeandliving/:subcategory' element={<ShopByCategory category="HomeAndLiving" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/SignUpModal' element={<SignUpModal />}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;

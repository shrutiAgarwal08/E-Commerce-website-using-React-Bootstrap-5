import React, { useContext,useState} from 'react'
import { CgProfile, CgShoppingCart } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

export default function NavBar() {
    const {getTotalCartItems} =useContext(ShopContext);
    const [menu,setMenu]=useState("shop");
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const handleMenuChange=(category)=>{
        setMenu(category);
    }
    const toggleNavbar = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white sticky-top">
            <div className='container-fluid'>
               <Link to='/'><span className='navbar-brand ms-4 mb-0 h1 col-2 col-sm-1' style={{"color":"darksalmon"}}>ELEVATE{menu==="shop"?<></>:<></>}</span></Link> 
<button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="forNav" aria-expanded={!isNavbarCollapsed} aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <div className={`collapse navbar-collapse col-10 col-sm-11 ${isNavbarCollapsed ? 'collapse' : 'show'}`} id="forNav" >   
                <ul className='navbar-nav mx-auto'>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link text-white" id="DD2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >MEN</NavLink>
                            <ul className="dropdown-menu " aria-labelledby="DD2">
                            <li onClick={()=>{handleMenuChange("men")}}><NavLink className="dropdown-item" to="/men">Men</NavLink></li>
                            <li><hr className="dropdown-divider"/></li>
                                <li onClick={()=>{handleMenuChange("men/T-Shirt")}}><NavLink className="dropdown-item" to="/men/T-Shirt">T-Shirt</NavLink></li>
                                <li onClick={()=>{handleMenuChange("men/Formal-Shirt")}}><NavLink className="dropdown-item" to="/men/Formal-Shirt">Formal Shirt</NavLink></li>
                                <li onClick={()=>{handleMenuChange("men/Jacket")}}><NavLink className="dropdown-item " to="/men/Jacket">Jackets</NavLink></li>
                                <li onClick={()=>{handleMenuChange("men/Jeans")}}><NavLink className="dropdown-item " to="/men/Jeans">Jeans</NavLink></li>
                                <li onClick={()=>{handleMenuChange("men/Trouser")}}><NavLink className="dropdown-item " to="/men/Trouser">Trousers</NavLink></li>
                                <li onClick={()=>{handleMenuChange("men/Shorts,Joggers")}}><NavLink className="dropdown-item " to="/men/Shorts,Joggers" style={{"textDecoration":"none"}}>Shorts,Joggers</NavLink></li>
                            </ul>
                    </li>
                    <li className='nav-item dropdown'>
                        <NavLink className='nav-link text-white' id='DD1' role='button' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">WOMEN</NavLink>
                            <ul className='dropdown-menu' aria-labelledby="DD1">
                              <li onClick={()=>{handleMenuChange("women")}}><NavLink className="dropdown-item" to="/women">Women</NavLink></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li onClick={()=>{handleMenuChange("women/Top")}}><NavLink className="dropdown-item" to="/women/Top">Tops</NavLink></li>
                              <li onClick={()=>{handleMenuChange("women/Kurti")}}><NavLink className="dropdown-item" to="/women/Kurti">Kurti</NavLink></li>
                              <li onClick={()=>{handleMenuChange("women/Jacket")}}><NavLink className="dropdown-item" to="/women/Jacket">Jackets</NavLink></li>
                              <li onClick={()=>{handleMenuChange("women/Dress")}}><NavLink className="dropdown-item" to="/women/Dress">Dresses</NavLink></li>
                              <li onClick={()=>{handleMenuChange("women/Co-ord set")}}><NavLink className="dropdown-item" to="/women/Co-ord set">Co-ords</NavLink></li>
                              <li onClick={()=>{handleMenuChange("women/Jeans")}}><NavLink className="dropdown-item" to="/women/Jeans">Jeans</NavLink></li>
                            </ul>  
                    </li>
                    <li className='nav-item dropdown'>
                        <NavLink className='nav-link text-white' id='DD3' role='button' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">KIDS</NavLink>
                            <ul className='dropdown-menu' aria-labelledby="DD3">
                            <li onClick={()=>{handleMenuChange("kids")}}><NavLink className="dropdown-item" to="/kids">Kids</NavLink></li>
                            <li><hr className="dropdown-divider"/></li>
                              <li onClick={()=>{handleMenuChange("kids/Tees")}}><NavLink className="dropdown-item" to="/kids/Tees">Tees</NavLink></li>
                              <li onClick={()=>{handleMenuChange("kids/Shorts")}}><NavLink className="dropdown-item" to="/kids/Shorts">Shorts</NavLink></li>
                              <li onClick={()=>{handleMenuChange("kids/Jeans")}}><NavLink className="dropdown-item" to="/kids/Jeans">Jeans</NavLink></li>
                              <li onClick={()=>{handleMenuChange("kids/Clothing set")}}><NavLink className="dropdown-item" to="/kids/Clothing set">Clothing sets</NavLink></li>
                              <li onClick={()=>{handleMenuChange("kids/Night Wear")}}><NavLink className="dropdown-item" to="/kids/Night Wear">Nightwear</NavLink></li>
                              <li onClick={()=>{handleMenuChange("kids/Kurta Set")}}><NavLink className="dropdown-item" to="/kids/Kurta Set">Kurta sets</NavLink></li>
                            </ul>  
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link text-white" id="DD4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">HOME AND LIVING</NavLink>
                            <ul className="dropdown-menu" aria-labelledby="DD4">
                            <li onClick={()=>{handleMenuChange("homeandliving")}}><NavLink className="dropdown-item" to="/homeandliving">Home and Living</NavLink></li>
                            <li><hr className="dropdown-divider"/></li>
                                <li onClick={()=>{handleMenuChange("homeandliving/Wall Decor")}}><NavLink className="dropdown-item" to="/homeandliving/Wall Decor">Wall Decor</NavLink></li>
                                <li onClick={()=>{handleMenuChange("homeandliving/Clock")}}><NavLink className="dropdown-item" to="/homeandliving/Clock">Clock</NavLink></li>
                                <li onClick={()=>{handleMenuChange("homeandliving/Photo Frames")}}><NavLink className="dropdown-item" to="/homeandliving/Photo Frames">Photo Frames</NavLink></li>
                                <li onClick={()=>{handleMenuChange("homeandliving/Artifacts")}}><NavLink className="dropdown-item" to="/homeandliving/Artifacts">Artifacts</NavLink></li>
                                 <li onClick={()=>{handleMenuChange("homeandliving/Mirror")}}><NavLink className="dropdown-item" to="/homeandliving/Mirror">Mirror</NavLink></li>
                                <li onClick={()=>{handleMenuChange("homeandliving/Diya,Candles")}}><NavLink className="dropdown-item" to="/homeandliving/Diya,Candles">Diya,Candles</NavLink></li>
                            </ul>
                    </li>
                </ul>
                <Link to='/Cart' className='pe-2'>
                  <button className='bg-transparent text-white border-0 position-relative'><CgShoppingCart className="fs-5" style={{"color":"darksalmon"}}/>
                   <small><span className='NavCartCount position-absolute badge start-25 bg-light text-dark rounded-circle translate-middle' style={{"top":'5px',"backgroundColor":'rgba(255, 255, 255, 0.6)'}}>{ getTotalCartItems()}</span></small>
                  </button>
                </Link>
                <div className='dropdown me-4 btn-group'>
                  <button className="text-white border border-dark bg-transparent dropdown-toggle-split" type="button" id="DD" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-display="static">
                    <CgProfile className="fs-5" style={{"color":"darksalmon"}}/></button>
                    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-lg-start' aria-labelledby="DD">
                        <li><Link className='dropdown-item' to='/SignUpModal'>Sign Up</Link></li>
                        <li><Link className='dropdown-item' to='/Login'>Log In</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    )
}
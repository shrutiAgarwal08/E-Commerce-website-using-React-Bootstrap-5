import React, { useState } from 'react'
import { FaInstagram, FaPinterestP, FaYoutube} from 'react-icons/fa'
import { FaSnapchat } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
export default function Footer() {
  const [MailId,setMailId]=useState('');
  const getMailId=(val)=>{
    setMailId(val.target.value);
  }
  const handleSubscription=(e)=>{
    e.preventDefault();
    if(MailId!==''){
      alert("Thank you for Subscribing");
    }else{
      alert("Please enter correct Email-ID");
    }
  }
  return (
   <div className='overflow-hidden bg-dark text-white'>
  <div className='row py-5 px-5 ro-cols-sm-4'>
    <div className='col-md-3 col-sm-3 col-6'>
      <h5 className='pb-2' style={{"color":"darksalmon"}}>SHOP</h5>
      <p><Link className="text-white" style={{"textDecoration":"none"}} to="/men">Men</Link ></p>
      <p><Link className="text-white" style={{"textDecoration":"none"}} to="/women">Women</Link ></p>
      <p><Link className="text-white" style={{"textDecoration":"none"}} to="/kids">Kids</Link ></p>
      <p><Link className="text-white" style={{"textDecoration":"none"}} to="/homeandliving">Home And Living</Link ></p>
    </div>
    <div className='col-md-3 col-sm-3 col-6'>
      <h5 className='pb-2' style={{"color":"darksalmon"}}>HELP</h5>
      <p>FAQ</p>
      <p>Shipping and Delivery</p>
      <p>Return Policy</p>
      <p>Privacy Policy</p>
    </div>
    <div className='col-md-3 col-sm-3 col-6'>
      <h5 className='pb-2' style={{"color":"darksalmon"}}>ACCOUNT</h5>
      <p><Link className="text-white" style={{"textDecoration":"none"}} to="/Login">Manage Account</Link ></p>
      <p>Saved Items</p>
      <p>Orders and Returns</p>
      <p>Redeem a Gift Card</p>
    </div>
    <div className='col-md-3 col-sm-3 col-6'>
      <h5 className='pb-2' style={{"color":"darksalmon"}}>SIGN UP AND SAVE</h5>
      <p>Subscribe to get special offers, free giveaways and once-in-a-lifetime deals.</p>
      <form onSubmit={handleSubscription}>
      <input type='email' id="userData"  placeholder=' Enter E-mail ID' style={{"color":"black"}} onChange={getMailId} autoComplete='off' required/>
      <input type='submit' value='Subscribe' className="border-0 px-2" style={{"backgroundColor":"darksalmon"}}/>
      </form>
      <div >
        <a href='https://instagram.com' className='text-white'><FaInstagram className='mt-2'/></a>
        <a href='https://pinterest.com' className='text-white'><FaPinterestP className='ms-2 mt-2'/></a>
        <a href='https://snapchat.com' className='text-white'><FaSnapchat className='ms-2 mt-2'/></a>
        <a href='https://youtube.com' className='text-white'><FaYoutube className='ms-2 mt-2'/></a>
      </div>
    </div>
</div>
<div className='row FooterCopyright'>
<hr/>
<p className='text-center'>Copyright @ {new Date().getFullYear()} - All Rights Reserved </p>
</div>
   </div>
  )
} 

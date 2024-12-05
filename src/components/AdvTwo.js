import React from 'react';
import "../Ecss.css";
export default function AdvTwo() {
  return (
    <div className='overflow-hidden card border-0 rounded-0'>
      <img src="images\adTwo.JPG" className="card-img img-fluid" alt="error loading"></img>
      <div className='card-img-overlay position-absolute top-50 start-0 translate-middle-y ms-4'>
        <p className='card-text fs-1' style={{"fontFamily":"Garamond",}}>
          Inspired by minimalism. <br></br> Made for everyday life.
        </p>
        <p className='card-text' style={{"fontFamily":"Times New Roman"}} >
          Lorem ipsum dolor sit amet, consectetur adipiscing<br></br> 
          elit,sed do eiusmod tempor incididunt ut labore<br></br>
          et dolore magna aliqua.Ut enim ad minim veniam,<br></br>
          quis nostrud  exercitation ullamco laboris<br></br> 
          nisi ut aliquip ex ea commodo consequat.</p>
        <button type='button' className='btn border-dark bg-transparent text-dark fs-6 p-2 mt-2 rounded-0'>SHOP NOW</button>
      </div>
    </div>
  )
}

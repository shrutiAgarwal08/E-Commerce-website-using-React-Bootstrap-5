import React from 'react'
import { Link } from 'react-router-dom'
export default function Carousel() {
  return (
    <div id="cIndicators" className="carousel carousel-dark slide " data-bs-ride="carousel">
      <div className="carousel-indicators h-auto w-auto">
        <button type="button" data-bs-target="#cIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#cIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#cIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner" style={{ "objectFit": "cover" }}>
        <div className="carousel-item active ">
          <Link to='/men'><img src="images\CARO1.PNG" className="d-block w-100 img-fluid" alt="imagesss" ></img></Link>
        </div>
        <div className="carousel-item ">
          <Link to='/women'><img src="images\CARO2.PNG" className="d-block w-100  img-fluid" alt="imagesss" ></img></Link>
        </div>
        <div className="carousel-item ">
          <Link to='/kids'><img src="images\CARO3.PNG" className="d-block w-100  img-fluid" alt="imagesss" ></img></Link>
        </div>
      </div>
    </div>
  )
}

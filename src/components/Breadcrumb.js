import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <nav className='overflow-hidden mx-5 my-4 col-10 col-sm-11 col-md-11' aria-label='breadcrumb' style={{ '--bs-breadcrumb-divider': "'>'" }}>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item' >
          <Link to='/' className='text-decoration-none text-dark'>HOME</Link>
        </li>
        <li className='breadcrumb-item'>
          <Link to={`/${product.category}`} className='text-decoration-none text-dark'>{product.category}</Link>
        </li>
        <li className='breadcrumb-item'>
          <Link to={`/${product.subcategory}`} className='text-decoration-none text-dark'>{product.subcategory}</Link>
        </li>
        <li className='breadcrumb-item active' aria-current='page'>
          <Link className='text-decoration-none text-dark'>{product.description}</Link>
        </li>
      </ol>
    </nav>
  )
}
export default Breadcrumb;

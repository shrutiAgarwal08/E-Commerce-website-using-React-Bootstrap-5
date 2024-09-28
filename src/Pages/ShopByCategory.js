import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../components/Item';
import { useParams } from 'react-router-dom';

const ShopByCategory = (props) => {

  const { ProductData } = useContext(ShopContext);
  const { subcategory } = useParams();
  return (
    <div className='overflow-hidden mx-5 my-4 '>
      <div className='row shopCategoryIndexSort'>
        <p className='col-7 col-sm-6 col-md-6'><span className='fw-bold align-baseline'>Showing 1-12</span> out of 44 products</p>
        <small className='col-5 col-sm-3 offset-sm-3 col-md-1 offset-md-5 dropdown'>
          <button className="shopCategorySort btn btn-outline-secondary dropdown-toggle rounded-pill" type="button" id="SDD" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
            Sort by</button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="SDD">
            <li>Menu item 1</li>
            <li>Menu item 2</li>
          </ul>
        </small>
      </div>
      <div className='row row-cols-1 gx-5 gy-2 shopCategoryProducts my-4 row-cols-md-4 row-cols-sm-2'>
        {ProductData.map((item) => {
          // console.log('Current item category:', item.category);
          // console.log('Provided category:', props.category);
          if (props.category === item.category) {
            if (subcategory) {
              if (item.subcategory === subcategory) {
                return (<Item key={item.id} id={item.id} img={item.img} category={item.category} title={item.title} price={item.price} />);
              }
            } else {
              return <Item key={item.id} id={item.id} img={item.img} category={item.category} title={item.title} price={item.price} />
            }
          }
          return null;
        })}
      </div>
      <button className=" row btn btn-secondary rounded-pill border-0 d-grid gap-2 mx-auto">Explore More</button>
    </div>
  )
}
export default ShopByCategory;
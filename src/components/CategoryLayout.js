import React from 'react'
import "../Ecss.css";
import { Link } from 'react-router-dom';
import { CategoryData } from '../Assets/CategoryData';

export default function CategoryLayout() {
    return (
    <div className="container-fluid-ab">
    {CategoryData.map(item => (
        <div key={item.id} className={`box box-${item.id}`} style={{ backgroundImage: `url(${item.bgimg})` }}>
          <div className="text">
            <Link className="cardLink text-black text-decoration-none" to={`/${item.category}`} >{item.section}</Link>
          </div>
        </div>
      ))}
    </div>
    );
}

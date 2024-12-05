import React from 'react'
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
            <div className="col-6 col-sm-3" key={props.id}>
                <div className="card h-100 border-0" >
                    <Link to={`/product/${props.id}`}>
<img onClick={window.scrollTo(0,0)} src={`http://localhost:8080${props.img}`} className="card-img-top img-fluid " alt="Error loading" style={{"width":"100%","height":"400px","objectFit":"cover","borderRadius":"0" }}/>
                    </Link>
                    <div className="card-body ps-0 ">
                        <p className="mb-0" style={{ "color": "darksalmon", "letterSpacing": "0.1em" }}><small>{props.category}</small></p>
                        <h6 className="card-title mb-0 ">{props.title}</h6>
                        <p className="card-text text-muted lh-sm m-0"><BiRupee className="align-bottom" />{props.price}</p>
                    </div>
                </div>
            </div>   
    )
}
export default Item;